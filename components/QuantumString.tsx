import React, { useEffect, useRef } from 'react';

interface QuantumStringProps {
    className?: string;
    vertical?: boolean;
}

const QuantumString: React.FC<QuantumStringProps> = ({ className = '', vertical = false }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const progress = useRef(0);
    const time = useRef(0);
    const reqId = useRef<number | null>(null);

    // Physics state
    const x = useRef(0.5); // Center point (0 to 1) - normalized position
    const y = useRef(0.5); // Center point (0 to 1)
    const velocity = useRef(0); // Velocity of the vibration
    const amplitude = useRef(0); // Current amplitude
    const targetAmplitude = useRef(0); // Target amplitude

    const manageMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const { clientX, clientY, movementX, movementY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();

        // Check if mouse is near the string center
        // For horizontal string: centered at Y=50%
        // For vertical string: centered at X=50%

        // Calculate normalized mouse position relative to container
        const relX = (clientX - left) / width;
        const relY = (clientY - top) / height;

        // Pluck logic: if crossing the string center
        // We can simplify: just check "velocity" of mouse interaction with string
        const mouseSpeed = vertical ? Math.abs(movementX) : Math.abs(movementY);

        // Add energy based on mouse speed
        if (mouseSpeed > 0) {
            velocity.current += mouseSpeed * 0.05; // Sensitivity
            time.current = 0; // Reset time for sine wave phase
        }
    };

    const animate = () => {
        // Damping and oscillation
        // Basic spring: amplitude decays, oscillation follows sine

        // Damping
        velocity.current *= 0.95;

        // Oscillate
        time.current += 0.2; // Frequency

        // Calculate current offset
        // Offset = MAX_OFFSET * sin(time) * current_energy
        const currentOffset = Math.sin(time.current) * velocity.current * 10; // 10 is max pixel displacement factor

        // Construct Path
        // A Quadratic Bezier curve: M start Q control end
        // Horizontal: M 0,50% Q 50%,(50% + offset) 100%,50%

        let path = "";

        if (vertical) {
            // Vertical String: x varies
            // M 50%,0 Q (50% + offset),50% 50%,100%
            const startX = 50;
            const controlX = 50 + currentOffset;
            const endX = 50;
            path = `M ${startX} 0 Q ${controlX} 50 ${endX} 100`;
        } else {
            // Horizontal String: y varies
            // M 0,50% Q 50%,(50% + offset) 100%,50%
            const startY = 50;
            const controlY = 50 + currentOffset;
            const endY = 50;
            path = `M 0 ${startY} Q 50 ${controlY} 100 ${endY}`;
        }

        // Update SVG Path directly for performance
        // Note: Coordinates in SVG viewbox 0 0 100 100
        if (pathRef.current) {
            pathRef.current.setAttribute("d", path);
        }

        reqId.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        animate();
        return () => {
            if (reqId.current) cancelAnimationFrame(reqId.current);
        }
    }, [vertical]);

    return (
        <div
            ref={containerRef}
            onMouseMove={manageMouseMove}
            className={`pointer-events-auto ${className} flex items-center justify-center`}
        >
            <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    ref={pathRef}
                    stroke="white"
                    strokeWidth="0.2" // Very thin
                    fill="none"
                    vectorEffect="non-scaling-stroke" // maintain consistent width
                />
            </svg>
        </div>
    );
};

export default QuantumString;
