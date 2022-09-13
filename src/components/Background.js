import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Background() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            className="particle-bg"
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 80,
                    },
                    color: {
                        "value": ["#EAECEC", "#FFDD43", "#bb86fc"]
                    },
                    shape: {
                        type:  "star",
                    },
                    opacity: {
                        value: .9,
                        anim: {
                            enable: true,
                            speed: .5,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: {
                            min: .1,
                            max: .6
                          },
                        direction: "bottom",
                        random: true,
                        straight: true,
                        out_mode: "out",
                    },
                    rotate: {
                        value: {
                          min: 0,
                          max: 360
                        },
                        direction: "random",
                        move: true,
                        animation: {
                          enable: true,
                          speed: {
                          min: 8,
                          max: 12
                        }
                        }
                      },
                      roll: {
                        darken: {
                          enable: true,
                          value: 30
                        },
                        enlighten: {
                          enable: true,
                          value: 30
                        },
                        enable: true,
                        speed: {
                          min: 3,
                          max: 17
                        }
                      },
                },
                retina_detect: true
            }}
        />
    );
}

export default Background