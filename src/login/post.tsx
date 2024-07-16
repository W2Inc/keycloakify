import { ToneMappingMode } from "postprocessing";
import * as THREE from "three";
import {
    Bloom,
    BrightnessContrast,
    ChromaticAberration,
    DepthOfField,
    EffectComposer,
    FXAA,
    Noise,
    ToneMapping,
    Vignette
} from "@react-three/postprocessing";

const Scene = () => {
    return (
        <EffectComposer>
            <FXAA />
            <Bloom
                luminanceThreshold={0.1}
                radius={0.86}
                mipmapBlur={true}
                intensity={4}
            />
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            <ChromaticAberration
                offset={new THREE.Vector2(0.0008, 0)}
                radialModulation={true}
                modulationOffset={0}
            />
            <BrightnessContrast brightness={-0.1} contrast={0.1} />
            <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={2}
                height={480}
            />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={0.9} />
        </EffectComposer>
    );
};

export default Scene;
