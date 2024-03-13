import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                particles: {
                    number: {
                        value: 150,
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.7,
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    move: {
                        angle: {
                            value: 10,
                            offset: 0,
                        },
                        enable: true,
                        speed: 2,
                    },
                },
            }}
        />
    );
};

export default ParticlesComponent;
