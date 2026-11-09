(() => {
  const data = {
    // =========================================================================
    // 1. ACADEMIC RESEARCH PROJECTS
    // =========================================================================
    'sign-arm': {
      title: 'Sign Language Teaching System with Interactive Prosthetic Arm',
      group: 'Academic Research',
      area: 'ROBOTICS & EMBEDDED SYSTEMS',
      intro: 'Computer-vision gesture recognition driving a custom 3D-printed electromechanical prosthetic arm for classroom demonstration.',
      tags: ['Robotics', 'Prosthetic Arm', 'MediaPipe 3D', 'YOLO + GRU', 'Embedded Edge', 'IEEE IWIS 2022'],
      symbol: 'ARM',
      heroImage: 'assets/images/hand_sign.png',
      overview: 'Special education for hearing-impaired children requires tangible, two-way visual and physical feedback. This project introduces an interactive teaching station pairing real-time computer vision gesture recognition (YOLO, MediaPipe, and GRU) with a custom-engineered 3D-printed electromechanical prosthetic arm. The system captures and scores learner gestures while the prosthetic arm reproduces synchronized finger kinematics for intuitive physical demonstration.',
      disclosure: 'Academic Research & Publication: Presented at the 2022 International Workshop on Intelligent Systems (IWIS) in Ulsan, Korea. Published in IEEE Xplore.',
      contributions: [
        'Designed and fabricated a custom 53cm 3D-printed electromechanical prosthetic arm driven by multi-servo tendon articulation.',
        'Engineered an edge computer-vision pipeline utilizing MediaPipe 3D landmarks, YOLO for static signs, and GRU for temporal gesture sequences.',
        'Built an integrated interactive desktop station providing real-time bidirectional feedback between learner and physical prosthetic apparatus.',
        'Published the full engineering methodology and experimental classroom validation in IEEE Xplore (IWIS 2022).'
      ],
      aspects: [
        ['Tendon-Driven Prosthetic Kinematics', 'Engineered mechanical finger tendons and micro-servo articulation within a 53cm 3D-printed prosthetic arm to faithfully reproduce human finger curling motions.'],
        ['21 3D Hand Landmarks & Neural Classification', 'Extracts 21 3D joint keypoints via MediaPipe. Classifies static letters with YOLO and dynamic gesture sequences using a Gated Recurrent Unit (GRU) network.'],
        ['Classroom Feedback Loop', 'Learners practice signs in front of an integrated webcam and receive instantaneous visual feedback and physical prosthetic imitation.']
      ],
      result: 'The interactive system was demonstrated live with positive educational user feedback. Below is the operational video showcasing real-time gesture recognition synchronized with the 3D prosthetic arm articulation.',
      video: 'https://www.youtube.com/embed/aV66T-wygk0?si=G2KrTVVQwz4sC249',
      videoCaption: 'Live Operational Demonstration: Real-time hand sign recognition driving synchronized 3D electromechanical prosthetic arm articulation.',
      gallery: [
        {
          src: 'assets/images/hand_sign.png',
          title: 'Interactive Prosthetic Arm Architecture',
          desc: 'Integrated system flow connecting webcam input, MediaPipe skeletal tracking, deep neural classification, and the physical 3D-printed prosthetic arm.'
        }
      ],
      resources: [
        ['Published Paper (IEEE Xplore) ↗', 'https://ieeexplore.ieee.org/document/9920883'],
        ['Original Academic Archive ↗', 'https://nhandoremon.github.io/TruongNgheNhan/project_handsign.html']
      ]
    },

    signvn: {
      title: 'SignVN: Intelligent Sign Language Teaching Platform',
      group: 'Academic Research',
      area: 'HUMAN-CENTERED AI & WEB SYSTEMS',
      intro: 'Interactive web platform for Vietnamese Sign Language with 3D avatar instruction, real-time webcam evaluation, and Agentic RAG assistant.',
      tags: ['SignVN Platform', '3D Avatar (TKR-HMR)', 'Knowledge Distillation', 'Agentic RAG', 'EdTech', '3 IEEE Papers'],
      symbol: 'VSL',
      heroImage: 'assets/images/vsl_website.png',
      overview: 'Democratizing sign language education nationwide requires eliminating reliance on costly proprietary hardware. SignVN is an open-access web ecosystem that turns any consumer laptop or smartphone with a webcam into an autonomous sign language classroom. Anchored by three peer-reviewed IEEE research breakthroughs, the platform orchestrates 3D virtual avatar instruction, real-time webcam practice evaluation, and an Agentic RAG translation assistant.',
      disclosure: 'Academic Research Continuum (2024–2026): Three core AI modules published at IEEE GTSD 2026 (Co-first Author).',
      contributions: [
        'Architected an open-access web learning ecosystem featuring structured lessons from alphabet fundamentals to daily communicative dialogues.',
        'Developed 3D virtual avatar instruction powered by Tokenized Kinematic Representation for Human Mesh Recovery (TKR-HMR, GTSD 2026).',
        'Implemented real-time single-view webcam posture scoring distilled from multi-view RGB-D lab sensors (GTSD 2026).',
        'Engineered VNSignMate, a multi-agent syntactic restructuring assistant orchestrating LLMs and RAG for VSL grammar (GTSD 2026).'
      ],
      aspects: [
        ['Learning Module · 3D Avatar Kinematics (TKR-HMR)', 'Generates expressive 3D virtual human avatar demonstrations from ordinary video, allowing learners to inspect hand depth and wrist angles from 360° perspective.'],
        ['Testing Module · Multi-View RGB-D Distillation', 'Distills complex multi-camera RGB-D depth features into a lightweight single-view model runnable directly in web browsers for zero-latency learner gesture scoring.'],
        ['Assistant Module · Agentic RAG (VNSignMate)', 'Bridges the grammatical disparity between spoken/written Vietnamese and VSL spatial syntax through multi-agent orchestration and retrieval-augmented generation.']
      ],
      result: 'The SignVN web platform is publicly accessible with interactive lessons, webcam scoring, and intelligent assistance. Below is the live demonstration video.',
      video: 'https://www.youtube.com/embed/-oyBAX4N_Bs?start=107',
      videoCaption: 'Live Demonstration: SignVN Web Application featuring 3D avatar instruction, real-time webcam evaluation, and bilingual translation assistant.',
      gallery: [
        {
          src: 'assets/images/vsl_website.png',
          title: 'SignVN Web Platform Interface',
          desc: 'Browser-accessible learning hub featuring structured curriculum, practice camera, and 3D avatar animation.'
        }
      ],
      resources: [
        ['Live SignVN Web Platform ↗', 'https://nguyenvandang24578.github.io/SignLaguage_Web_Application/'],
        ['VSL Team Research Portfolio ↗', 'https://vydat-1702.github.io/HandSignLanguage_Portfolio/index.html'],
        ['TKR-HMR Paper (IEEE Xplore) ↗', 'https://ieeexplore.ieee.org/document/11722383'],
        ['Distillation Paper (IEEE Xplore) ↗', 'https://ieeexplore.ieee.org/document/11722506'],
        ['Agentic RAG Paper (IEEE Xplore) ↗', 'https://ieeexplore.ieee.org/document/11722489']
      ]
    },

    facial: {
      title: 'Multimodal Facial Disguise Detection',
      group: 'Academic Research',
      area: 'VISIBLE–THERMAL COMPUTER VISION',
      intro: 'Physics-informed multimodal registration and cross-attention transformer fusion for robust facial disguise detection under surveillance.',
      tags: ['Visible–Thermal', 'SCF-DETR', 'IISFD Dataset', 'Transformer Fusion', 'Registration'],
      symbol: 'FDD',
      heroImage: 'assets/images/IIS_datasets_demo.jpg',
      overview: 'In public surveillance and security scenarios, suspects frequently attempt to evade CCTV identification by wearing synthetic facial disguises—such as prosthetic beards, mustaches, masks, sunglasses, scarves, or wigs. Standard visual-light (RGB) cameras collapse when key facial landmarks are occluded or spoofed. This research at Sejong University leverages the complementary physics of thermal infrared imaging, which captures subcutaneous heat distributions and authentic skin boundaries. We engineered a physics-informed geometric registration framework coupled with SCF-DETR (Spatially Constrained Fusion DETR) to detect disguised faces reliably across variable viewpoints and uncontrolled lighting.',
      disclosure: 'Academic Research: Manuscript prepared for target journal Information Fusion. Original empirical testbed and dataset developed at Sejong University (IISLAB).',
      contributions: [
        'Introduced the IIS Facial Disguise (IISFD) dataset: a benchmark featuring 9 disguise classes, 5 challenging capture environments (lab, elevators, backlit areas, crowded spaces, hallways), and 9 facial angles.',
        'Engineered a physically constrained registration pipeline that resolves cross-spectral parallax and viewpoint differences without tedious manual landmark pairing.',
        'Developed SCF-DETR, a multimodal transformer architecture that dynamically fuses spectral modalities, consistently outperforming single-modality state-of-the-art baselines in both laboratory and real-world trials.'
      ],
      aspects: [
        ['The Camouflage Challenge in Public Surveillance', 'Standard facial recognition collapses under intentional occlusions. Our approach extracts dual-stream features where thermal emissivity reveals authentic physiological boundaries beneath synthetic disguises.'],
        ['Physically Constrained Image Registration', 'Addresses severe cross-spectral parallax and non-rigid distortion. We formulate a geometric constraint optimization that stabilizes visible–thermal alignment across moving subjects in video feeds.'],
        ['SCF-DETR Multimodal Fusion', 'A cross-attention transformer network that attends to complementary thermal heat signatures and high-resolution visible texture tokens simultaneously for bounding-box and disguise-type prediction.'],
        ['Experimental Validation & Benchmarks', 'Comprehensive validation on the IISFD dataset, demonstrating high recall even under extreme backlighting, multi-angle poses, and varied synthetic camouflage materials.']
      ],
      result: 'Experimental results demonstrate that our proposed multimodal SCF-DETR framework significantly outperforms single-modality baselines (RGB-only and Thermal-only) across both controlled laboratory setups and uncontrolled public surveillance environments.',
      gallery: [
        {
          src: 'assets/images/A_wanted_USA.jpg',
          title: 'Real-world Surveillance Challenge',
          desc: 'CCTV footage of disguised suspects in public environments, illustrating how synthetic facial modifications evade conventional visible-light facial recognition.'
        },
        {
          src: 'assets/images/hypothesis.jpg',
          title: 'Visible vs. Thermal Camouflage Hypothesis',
          desc: 'Thermal infrared signatures penetrate synthetic hair and prosthetic accessories by capturing authentic body heat emissions versus cooler foreign materials.'
        },
        {
          src: 'assets/images/FDD in Video Surveillance.jpg',
          title: 'SCF-DETR System Pipeline',
          desc: 'End-to-end framework: dual-modality video acquisition, physics-informed spatial registration, and cross-attention transformer disguise detection.'
        },
        {
          src: 'assets/images/IIS_datasets_demo.jpg',
          title: 'Proposed IISFD Multimodal Dataset',
          desc: 'Paired thermal-visible dataset collected across 9 disguise classes, 5 realistic surveillance settings, and 9 facial angles.'
        },
        {
          src: 'assets/images/Testing_on_IISFD_in_lab.jpg',
          title: 'Laboratory Testing Results',
          desc: 'Accurate bounding box localization and disguise classification under controlled illumination and camera distances.'
        },
        {
          src: 'assets/images/Testing_on_IISFD_in_realworld.jpg',
          title: 'Real-World Surveillance Validation',
          desc: 'High-accuracy disguise detection tested in realistic elevator lobbies and hallway surveillance cameras.'
        }
      ],
      resources: [
        ['Target Journal: Information Fusion (Manuscript in preparation)', '#'],
        ['Original Academic Project Archive ↗', 'https://nhandoremon.github.io/TruongNgheNhan/project_facial_disguise.html']
      ]
    },

    abnormal: {
      title: 'Abnormal Behavior Detection on CCTV',
      group: 'Academic Research',
      area: 'VIDEO UNDERSTANDING & SURVEILLANCE',
      intro: 'Autonomous multi-person tracking, 17-keypoint skeletal kinematics, and spatio-temporal action modeling certified against the South Korean KISA Intelligent CCTV benchmark standard.',
      tags: ['IITP Government Research', 'KISA Benchmark Standard', 'YOLOv8 + DeepSORT', 'ViTPose (17 Keypoints)', 'Temporal Action AI', 'Smart Municipal CCTV'],
      symbol: 'CCTV',
      heroImage: 'assets/images/cctv.jpg',
      overview: 'Intelligent video surveillance requires parsing continuous human activities and flagging anomalous events (such as sudden falls, loitering, violence, or abandoned luggage) without operator fatigue. Sponsored by IITP under South Korea\'s Ministry of Science and ICT (MSIT), this project establishes an end-to-end framework combining real-time object detection, deep multi-object tracking, body pose estimation, and sequential temporal action modeling certified against the national KISA benchmark standards.',
      disclosure: 'South Korean Government Research Grant: Developed at Sejong University (IISLAB) funded by the Institute of Information & Communications Technology Planning & Evaluation (IITP / MSIT), Republic of Korea.',
      contributions: [
        'Integrated YOLO object detection with deep metric appearance tracking to maintain consistent identity trajectories across crowded surveillance viewpoints.',
        'Employed ViTPose to extract 17 keypoint skeletal kinematics, capturing nuanced bodily dynamics and sudden motion deviations.',
        'Constructed temporal action classification models to differentiate benign routines from anomalous occurrences.'
      ],
      aspects: [
        ['Multi-Person Detection & Tracking', 'Robust bounding-box association under severe occlusions, cross-overs, and variable camera distances.'],
        ['Pose Kinematics Extraction', 'Skeletal joint tracking that abstracts away clothing and illumination variations, focusing purely on kinetic signatures.'],
        ['Temporal Action Recognition', 'Analyzes sequence windows to detect rapid behavioral shifts such as stumbles, falls, and erratic movements.']
      ],
      result: 'The pipeline achieved robust multi-target tracking and action classification across diverse public CCTV benchmark clips. Below are qualitative validation clips across critical anomaly categories.',
      gallery: [
        {
          src: 'assets/images/cctv.jpg',
          title: 'CCTV Video Surveillance Testbed',
          desc: 'Real-time multi-target detection, tracking IDs, and skeletal pose estimation in surveillance footage.'
        }
      ],
      videos: [
        {
          title: 'Anomaly 01: Falldown Detection',
          src: 'assets/video/Falldown_1.mp4',
          desc: 'Rapid identification of sudden loss of balance or collapse in pedestrian zones.'
        },
        {
          title: 'Anomaly 02: Violence & Physical Altercation',
          src: 'assets/video/Violence_1.mp4',
          desc: 'Real-time alert triggered by rapid chaotic limb movement and aggressive proximity.'
        },
        {
          title: 'Anomaly 03: Perimeter Intrusion',
          src: 'assets/video/Instrusion_1.mp4',
          desc: 'Automated detection of unauthorized entry across predefined spatial boundary thresholds.'
        },
        {
          title: 'Anomaly 04: Abandoned Object / Luggage',
          src: 'assets/video/Abandonment_1.mp4',
          desc: 'Tracking stationary luggage separated from its owner past safety duration limits.'
        },
        {
          title: 'Anomaly 05: Suspicious Loitering',
          src: 'assets/video/Loitering_1.mp4',
          desc: 'Stationary or circling behavioral tracking in restricted surveillance corridors.'
        },
        {
          title: 'Anomaly 06: Early Fire & Smoke Inception',
          src: 'assets/video/Fire_Detection_1.mp4',
          desc: 'Visual detection of ignition flicker and rising smoke plumes in indoor cameras.'
        }
      ],
      resources: [
        ['Original Academic Project Archive ↗', 'https://nhandoremon.github.io/TruongNgheNhan/project_abnormal.html']
      ]
    },

    smoke: {
      title: 'Human Detection in Heavy Smoke Scenarios',
      group: 'Academic Research',
      area: 'THERMAL / INFRARED SENSOR FUSION',
      intro: 'Multimodal infrared and thermal imaging fusion optimized for real-time edge execution on NVIDIA Jetson Nano, engineered as an airborne sensor payload for search-and-rescue drones in zero-visibility disaster environments.',
      tags: ['IEEE ICSSE 2023 · First Author', 'Multimodal Sensor Fusion (IR + LWIR)', 'NVIDIA Jetson Nano Edge AI', 'Rescue Drone Payload', 'Cross-Spectral Calibration'],
      symbol: 'SMOKE',
      heroImage: 'assets/images/Human_insmoke.jpg',
      overview: 'In structural fires and search-and-rescue emergencies, thick smoke creates zero-visibility conditions that render standard visual-spectrum cameras ineffective. This research at HCMUTE investigates the fusion of Infrared (IR) and Long-Wave Thermal Infrared (LWIR) spectra. By optically aligning and fusing these modalities, the system penetrates dense smoke obscuration to detect human victims in real time on resource-constrained embedded edge hardware (NVIDIA Jetson Nano), designed as an airborne sensor payload for rescue drones.',
      disclosure: 'Peer-Reviewed IEEE Conference Paper: Presented at the 2023 International Conference on System Science and Engineering (ICSSE). Published in IEEE Xplore (First Author).',
      contributions: [
        'Developed an optical alignment methodology using a custom light-heating calibration target to register infrared and thermal camera viewpoints precisely.',
        'Engineered an efficient cross-spectral fusion architecture that merges thermal heat silhouettes with infrared surface contours to highlight human presence.',
        'Optimized deep learning detection models for real-time inference on an edge computing platform (NVIDIA Jetson Nano).',
        'Published empirical findings at the 2023 IEEE ICSSE conference.'
      ],
      aspects: [
        ['Sensor Calibration & Point-to-Point Registration', 'Overcomes different focal lengths and optical centers between IR and thermal cameras using a specialized heated planar calibration target.'],
        ['Multimodal Feature Fusion Strategy', 'Combines infrared edge reflectivity with thermal radiative contrast to eliminate smoke clutter and false positives.'],
        ['Edge Deployment on Jetson Nano', 'Engineered for low power consumption and wearable firefighting equipment, maintaining real-time frame rates under heavy smoke tests.']
      ],
      result: 'Empirical experiments in artificial smoke chambers validated that multimodal fusion achieved robust human detection where RGB imagery failed completely.',
      gallery: [
        {
          src: 'assets/images/Human_datasests.jpg',
          title: 'Multimodal Smoke Chamber Datasets',
          desc: 'Paired infrared and thermal video recordings captured in an artificial smoke simulation chamber under varying visibility levels.'
        },
        {
          src: 'assets/images/Human_expertiment_result.jpg',
          title: 'Real-time Detection Results in Dense Smoke',
          desc: 'Comparative visualization showing standard visual camera failure versus successful multimodal fusion bounding box detection of human targets.'
        }
      ],
      resources: [
        ['Published Paper (IEEE Xplore) ↗', 'https://ieeexplore.ieee.org/document/10227078'],
        ['Original Academic Project Archive ↗', 'https://nhandoremon.github.io/TruongNgheNhan/project_human.html']
      ]
    },

    rehab: {
      title: 'Flexible Hand Rehabilitation System',
      group: 'Applied R&D',
      area: 'MECHATRONICS & REHABILITATION ROBOTICS',
      intro: 'Custom-built electromechanical XY-axis rehabilitation platform with precision position feedback and programmable movement profiles.',
      tags: ['Stepper Motors', 'Encoders', 'Embedded Control', 'Hardware Platform', 'Rehabilitation'],
      symbol: 'REHAB',
      heroImage: 'assets/images/Hardware_Flatform.JPG',
      overview: 'Stroke and neurological trauma patients often require repetitive, controlled physical therapy to restore hand articulation and motor control. This engineering project developed a custom-built hardware platform for precise hand rehabilitation. The system features a robust XY-axis stepper motor mechanism providing programmable trajectory guidance, paired with optical rotary encoders for continuous closed-loop position monitoring.',
      disclosure: 'Applied Engineering Project: Hardware platform engineered at HCMUTE (Faculty of Electrical & Electronics Engineering).',
      contributions: [
        'Designed and fabricated a dedicated XY-axis mechatronic testbed with low-friction mechanical slides and high-torque stepper actuation.',
        'Integrated precision encoders to continuously measure hand position and deliver real-time kinematic feedback during therapeutic exercises.',
        'Implemented micro-controller firmware capable of executing adaptive exercise regimens tailored to individual patient recovery stages.'
      ],
      aspects: [
        ['Mechanical XY Stage Design', 'High-rigidity dual-axis motorized motion stage engineered for smooth patient guidance and gentle force transmission.'],
        ['Closed-loop Position Feedback', 'Continuous optical encoder readout ensuring exercise compliance and emergency torque cutoffs for patient safety.'],
        ['Programmable Therapy Protocols', 'Configurable motion paths supporting passive, assistive, and resistive rehabilitation exercises.']
      ],
      result: 'The physical prototype platform demonstrated accurate position tracking and safe, repeatable therapeutic exercise cycles.',
      video: 'https://www.youtube.com/embed/g8OJX7cz-z0?si=gkiXKLieWvgV-U8I',
      videoCaption: 'Operational Demonstration: XY-axis motorized hand rehabilitation apparatus in motion.',
      gallery: [
        {
          src: 'assets/images/Hardware_Flatform.JPG',
          title: 'Hardware Platform Architecture',
          desc: 'Custom-fabricated dual-axis mechatronic mechanism with stepper motor drives and linear bearing guides.'
        }
      ],
      resources: [
        ['Original Academic Project Archive ↗', 'https://nhandoremon.github.io/TruongNgheNhan/project_rehabilitation.html']
      ]
    },

    // =========================================================================
    // 2. APPLIED R&D (INDUSTRY) PROJECTS
    // =========================================================================
    vla: {
      title: 'Vision-Language-Action (VLA) for Robotic Manipulation',
      group: 'Applied R&D',
      area: 'PHYSICAL AI & ROBOT LEARNING',
      intro: 'From LeRobot foundation policies to industrial 6-DoF cobot manipulation with VR teleoperation and 7-DoF bimanual coordination for CES 2027.',
      tags: ['Physical AI', 'Yuil Robotics R&D', 'LeRobot (Hugging Face)', 'VR Teleoperation', '6-DoF Cobot Pick & Place', '7-DoF Dual Arm (CES 2027)'],
      symbol: 'VLA',
      heroImage: 'assets/images/vla/Dual Arm 7DoF.png',
      overview: 'Vision-Language-Action (VLA) models represent the frontier of Physical AI and Embodied Intelligence. This industrial research at Yuil Robotics charts a progression across three milestones: validating foundation policy learning on the open-source LeRobot framework (March 2026), scaling to commercial 6-DoF collaborative robots with VR teleoperation for autonomous fruit pick-and-place (June 2026), and engineering complex bimanual coordination on a 7-DoF dual-arm humanoid platform targeted for CES 2027.',
      disclosure: 'Corporate Confidentiality & NDA: Proprietary commercial robot execution video streams are restricted under Yuil Robotics enterprise policies. Authorized still snapshots, open benchmark demos, and high-level architectural methodologies are showcased.',
      contributions: [
        'Established open-source VLA policy benchmarking on LeRobot, successfully training and deploying imitation learning policies for autonomous cube pick-and-place manipulation.',
        'Engineered a 6-DoF VR teleoperation data collection pipeline using Meta Quest tracking to capture high-fidelity human demonstration trajectories.',
        'Fine-tuned and deployed autonomous visual policies on industrial Yuil cobots for table-to-box fruit pick-and-place tasks under varied spatial configurations.',
        'Architected a 7-DoF dual-arm bimanual manipulation system coordinating 14 degrees of freedom for complex toolbox manipulation, serving as Yuil Robotics flagship showcase for CES 2027.'
      ],
      aspects: [
        ['Phase 1 · LeRobot Benchmark', 'Multi-camera visual observation synchronization, imitation learning, and physical rollout for cube pick-and-place.'],
        ['Phase 2 · 6-DoF Cobot & VR Teleop', 'VR spatial trajectory recording, policy fine-tuning, and autonomous fruit transfer from tables into shipping boxes.'],
        ['Phase 3 · 7-DoF Dual-Arm Bimanual', 'Asymmetric bimanual coordination, collision avoidance, and multi-camera egocentric perception targeted for CES 2027.']
      ],
      result: 'End-to-end Physical AI progression from open-source policy evaluation to industrial cobots and bimanual dual-arm manipulation platforms.',
      gallery: [
        {
          src: 'assets/images/vla/Dual Arm 7DoF.png',
          title: '7-DoF Dual-Arm Flagship Platform for CES 2027',
          desc: 'Bimanual coordination performing simultaneous toolbox lid retention and tray extraction.'
        },
        {
          src: 'assets/images/vla/Teleoperation.png',
          title: 'VR Teleoperation Data Collection',
          desc: 'Meta Quest 6D pose teleoperation on industrial Yuil Cobot in the robotics R&D lab.'
        },
        {
          src: 'assets/images/vla/Cobot.JPEG',
          title: 'Autonomous 6-DoF Cobot Pick & Place',
          desc: 'Autonomous VLA inference transferring fruits from table to box.'
        }
      ],
      resources: [
        ['LeRobot Operational Demo Video (YouTube) ↗', 'https://www.youtube.com/watch?v=S3Ujdsisdck'],
        ['Related Project: 3D Vision & 6D Pose →', 'project.html?id=pose'],
        ['Related Project: VR Robot Teleoperation →', 'project.html?id=teleop']
      ]
    },

    pose: {
      title: '3D Vision & 6D Object Pose Estimation',
      group: 'Applied R&D',
      area: 'ROBOT PERCEPTION & MANIPULATION · YUIL ROBOTICS',
      intro: 'Real-time 6D pose tracking, autonomous vision-feedback hand-eye calibration (≤2mm error), and mobile dual-arm manipulation deployed at Yuil Robotics.',
      tags: ['6D Pose Estimation', 'FoundationPose', 'Autonomous Hand-Eye Calibration', 'Yuil Robotics R&D', 'AMR Mobile Manipulation', 'ROBOTIS Hand (RL)', 'Jetson AGX Orin & RTX 5080'],
      symbol: '6D',
      heroImage: 'assets/images/6D_Pose/6D_Pose_cover.png',
      overview: 'An industrial-grade 3D computer vision and spatial perception suite developed for autonomous robotic manipulation at Yuil Robotics. The system integrates optimized FoundationPose architectures, a novel closed-loop vision-feedback hand-eye calibration pipeline achieving sub-2mm translation precision, and multi-platform deployment across autonomous mobile robots (AMR), 7-DoF dual arms, and multi-finger robotic hands.',
      disclosure: 'Industrial R&D · Yuil Robotics (South Korea) · Production Deployment · Zero-Copy IPC / ROS2 Bridge',
      contributions: [
        'Engineered an accelerated 6D object pose tracking pipeline achieving 30.0 FPS on NVIDIA RTX 5080 and 14.0 FPS deterministic inference on embedded Jetson AGX Orin.',
        'Developed an Auto-Select engine supporting both CAD-based tracking for known parts and zero-shot model-free tracking for novel warehouse SKUs.',
        'Created a novel autonomous online Hand-Eye calibration method using active visual feedback to dynamically search the DFvision chessboard, achieving ≤2.0 mm translation error and ≤0.7° rotation error.',
        'Integrated 6D pose estimation onto an autonomous mobile robot (AMR) dual-arm system for precision picking of goods and palletized carton placement.',
        'Coordinated a bimanual pipeline where 6D pose guides a robot arm to pick and transfer the cube onto a ROBOTIS multi-finger hand, followed by RL policies actively rotating the cube to designated target faces.'
      ],
      aspects: [
        ['Hardware Acceleration', 'TensorRT-optimized FoundationPose pipeline yielding 30 FPS (RTX 5080) and 14 FPS (Jetson AGX Orin) with sub-millisecond IPC latency.'],
        ['Known vs. Novel Tracking', 'Seamless switching between high-precision CAD mesh projection (33.8 FPS) and prompt-based zero-shot 3D bounding box tracking.'],
        ['Autonomous Hand-Eye Calibration', 'Dynamic online pose generation via closed-loop vision feedback, replacing tedious 20–50 manual waypoint teaching with ≤2mm accuracy.'],
        ['AMR Mobile Manipulation', 'End-to-end perception-to-action coordination: 6D pose grasping, mobile transit, and container drop-off at Yuil Robotics.'],
        ['Cube Handover & In-Hand RL', 'Two-phase execution: 6D-pose-guided pick-and-handover onto the ROBOTIS hand, followed by continuous SE(3) closed-loop RL finger actuation for target face re-orientation.']
      ],
      result: 'The deployed vision and calibration framework significantly streamlined robotic workcell commissioning at Yuil Robotics, delivering deterministic real-time tracking at 30 FPS, reducing hand-eye calibration time from hours to a single one-click autonomous routine with ≤2mm precision, and powering both heavy mobile dual-arm palletizing and agile multi-finger dexterous manipulation.',
      resources: [
        ['Yuil Robotics Official Website', 'http://www.yuilrobot.com/'],
        ['FoundationPose (NVIDIA Research)', 'https://github.com/NVlabs/FoundationPose']
      ]
    },

    teleop: {
      title: 'VR Robot Teleoperation',
      group: 'Applied R&D',
      area: 'HUMAN–ROBOT INTERACTION',
      intro: 'Immersive motion mapping and real-time robot control for demonstrations and learning workflows.',
      tags: ['Meta Quest 3', 'Teleoperation', 'Robot Manipulation', 'Kinematics'],
      symbol: 'VR',
      overview: 'This project explores mapping human motion from a VR interface (Meta Quest) into robot simulation and hardware, and utilizing robot cameras for immersive visual feedback to collect demonstration data for robot learning.',
      disclosure: 'Industry R&D: Teleoperation interface for dual-arm robotic platforms.',
      contributions: [
        'Designed staged wrist and finger mapping experiments for human-to-robot kinematic translation.',
        'Planned arm-control and visual feedback integration.',
        'Connected teleoperation concepts to robot demonstration data collection workflows.'
      ],
      aspects: [
        ['Motion Mapping', 'VR wrist and finger motion transformed to robot control kinematics targets.'],
        ['Arm Teleoperation', 'Single-arm and dual-arm actuation and safety validation.'],
        ['Vision Feedback', 'Robot head and wrist views streamed back to the human operator.'],
        ['Data Recording', 'Synchronized observations and actions recorded for imitation learning.']
      ],
      result: 'Immersive teleoperation workflow mapping operator movements to dual-arm robot manipulators.',
      resources: []
    }
  };

  // Aliases
  data['rehabilitation'] = data['rehab'];
  data['sign'] = data['sign-arm'];
  data['handsign'] = data['sign-arm'];
  data['sign-web'] = data['signvn'];

  // Robustly extract and sanitize ID (handling trailing periods, slashes, whitespace)
  const rawId = (new URLSearchParams(location.search).get('id') || 'facial').trim();
  const cleanKey = rawId.toLowerCase().replace(/[^a-z0-9_-]/g, '');

  // Redirect teleop to VLA Phase 2
  if (cleanKey === 'teleop') {
    window.location.replace('project.html?id=vla#phase2');
    return;
  }
  const p = data[cleanKey] || data[rawId] || data['sign'];

  // Helper selector
  const $ = id => document.getElementById(id);

  // Update Page Title
  document.title = p.title + ' | Nghe-Nhan Truong';

  // 1. Hero Content
  $('project-title').textContent = p.title;
  $('crumb-title').textContent = p.title;
  $('project-area').textContent = p.area;
  $('project-intro').textContent = p.intro;
  $('project-tags').innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

  // Hero Visual: Display actual hero image if available, else graphic icon
  const visualContainer = $('project-visual');
  if (p.heroImage) {
    visualContainer.innerHTML = `
      <img src="${p.heroImage}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
      <span id="visual-label" style="position:absolute; bottom:14px; left:16px; background:rgba(11,38,56,0.85); padding:4px 8px; border-radius:4px; font-size:10px; font-weight:800; letter-spacing:1.5px; color:#c6ece8;">${p.area}</span>
    `;
  } else {
    visualContainer.innerHTML = `
      <div class="visual-graphic">${p.symbol}</div>
      <span id="visual-label">${p.area}</span>
    `;
  }

  // Hero CTA Buttons: Add direct jump to demo video if available
  const ctaSlot = document.querySelector('.detail-cta');
  if (ctaSlot) {
    let ctaHtml = '';
    if (p.video || (p.videos && p.videos.length)) {
      ctaHtml += `<a class="detail-button" href="#results">▶ Watch Demo Video ↓</a>`;
    }
    ctaHtml += `<a class="detail-button secondary" href="#overview">Overview ↓</a>`;
    ctaHtml += `<a class="detail-button secondary" href="index.html#academic">All academic work ↗</a>`;
    ctaSlot.innerHTML = ctaHtml;
  }

  const group = $('crumb-group');
  group.textContent = p.group;
  group.href = p.group === 'Academic Research' ? 'index.html#academic' : 'index.html#applied';


  function renderFacialStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#challenge">Explore Research Story ↓</a>
        <a class="detail-button secondary" href="#experiments">View Benchmarks ↓</a>
        <a class="detail-button secondary" href="index.html#academic">All academic work ↗</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- 01. Motivation & Real-World Challenge -->
      <section class="story-section" id="challenge">
        <div class="detail-wrap">
          <div class="story-split">
            <div>
              <div class="story-kicker">01 / The Surveillance Bottleneck</div>
              <h2>When Synthetic Camouflage Defeats Optical CCTV.</h2>
              <p>In public surveillance and security checkpoints, suspects intentionally evade conventional automated facial recognition by wearing low-cost synthetic disguises—prosthetic beards, mustaches, wigs, sunglasses, face masks, or scarves.</p>
              <p>Standard visible-light (RGB) surveillance cameras rely on optical surface features and facial landmarks (lip contours, jawline, nose tips). When these landmarks are artificially occluded or modified by synthetic foreign accessories, standard face recognition algorithms collapse, causing high false-negative rates and security loopholes.</p>
              <ul class="story-points">
                <li><strong>Real-world Vulnerability:</strong> Shoplifters and suspects exploit optical blind spots by concealing authentic biometric landmarks.</li>
                <li><strong>Optical Camera Failure:</strong> Changes in ambient illumination, low contrast, and accessory texture camouflage mislead standard convolutional facial extractors.</li>
              </ul>
            </div>
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/A_wanted_USA.jpg" alt="Real-world surveillance disguised suspects" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 1 · Real-world CCTV Surveillance Challenge</strong>
                Surveillance recordings of suspects utilizing synthetic disguise accessories to bypass standard visual security monitoring.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 02. Physics Hypothesis: Visible vs. Thermal IR -->
      <section class="story-section shade" id="hypothesis">
        <div class="detail-wrap">
          <div class="story-split reverse">
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/hypothesis.jpg" alt="Visible vs Thermal Camouflage Hypothesis" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 2 · Thermodynamic Hypothesis (Visible vs. Thermal IR)</strong>
                Thermal emissivity penetrates synthetic hair and accessories by contrasting subcutaneous metabolic body heat against cooler foreign materials.
              </figcaption>
            </figure>
            <div>
              <div class="story-kicker">02 / Physical Hypothesis</div>
              <h2>Thermal Emissivity: Revealing Biometrics Beneath Camouflage.</h2>
              <p>To overcome the fundamental limitations of visible-spectrum imaging, this research leverages the complementary physics of Long-Wave Infrared (LWIR) thermal radiation.</p>
              <p>While visible sensors only capture reflected ambient photons on external surfaces, thermal infrared sensors record thermal electromagnetic radiation emitted directly by subcutaneous blood flow and metabolic skin heat (36.5°C – 37.5°C).</p>
              <p>Foreign disguise materials—such as synthetic acrylic hair, latex adhesives, and polyester scarves—exhibit drastically different thermal emissivity (<em>&epsilon;</em>) and thermal conductivity compared to living human facial tissue. Consequently, the authentic anatomical facial boundaries remain distinctly traceable in the thermal spectrum, rendering synthetic camouflages immediately detectable.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 03. Architecture & SCF-DETR Pipeline -->
      <section class="story-section" id="pipeline">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">03 / Proposed Framework</div>
            <h2>Physics-Informed Registration &amp; SCF-DETR Transformer Fusion.</h2>
            <p>Integrating dual-spectrum cameras in practical surveillance poses severe challenges: cross-spectral parallax, differing focal lengths, non-rigid subject motion, and asynchronous sensor sampling. Our end-to-end framework tackles these bottlenecks through a two-stage approach:</p>
            <ul class="story-points">
              <li><strong>Physics-Informed Spatial Registration:</strong> A geometric constraint optimization that stabilizes visible–thermal alignment across moving subjects without requiring tedious manual landmark pairing.</li>
              <li><strong>SCF-DETR (Spatially Constrained Fusion DETR):</strong> A multimodal transformer network that employs cross-attention mechanisms to dynamically fuse high-resolution visible texture tokens with thermal radiative tokens, predicting both disguise bounding boxes and disguise category labels simultaneously.</li>
            </ul>
          </div>
          
          <figure class="story-figure full-width">
            <div class="img-box">
              <img src="assets/images/FDD in Video Surveillance.jpg" alt="SCF-DETR Multimodal System Pipeline" loading="lazy">
            </div>
            <figcaption>
              <strong>Figure 3 · End-to-End Multimodal Surveillance Architecture</strong>
              Dual-modality video acquisition, physics-informed geometric registration, and cross-attention transformer disguise detection (SCF-DETR).
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- 04. The IISFD Benchmark Dataset -->
      <section class="story-section shade" id="dataset">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 20px;">
            <div class="story-kicker">04 / Benchmark Dataset</div>
            <h2>The IIS Facial Disguise (IISFD) Multimodal Benchmark.</h2>
            <p>Due to the lack of publicly available paired thermal-visible disguise benchmarks in surveillance settings, we constructed the <strong>IIS Facial Disguise (IISFD)</strong> dataset at Sejong University (IISLAB). The dataset features high diversity across three crucial dimensions:</p>
            <ul class="story-points" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
              <li><strong>9 Disguise Classes:</strong> Fake beard, fake mustache, wig, glasses, sunglasses, face mask, scarf, hat, and complex multi-accessory combinations.</li>
              <li><strong>5 Challenging Scenarios:</strong> Controlled lab, elevators, crowded public lobbies, backlit corridors, and hallways.</li>
              <li><strong>9 Facial Poses / Angles:</strong> Full frontal, left/right yaw (30°, 60°, 90°), and pitch tilts to mirror realistic CCTV viewpoints.</li>
            </ul>
          </div>
          
          <figure class="story-figure full-width">
            <div class="img-box">
              <img src="assets/images/IIS_datasets_demo.jpg" alt="IISFD Multimodal Dataset Samples" loading="lazy">
            </div>
            <figcaption>
              <strong>Figure 4 · Proposed IISFD Paired Thermal-Visible Dataset</strong>
              Comprehensive benchmark matrix showing multi-angle visible and thermal captures across multiple synthetic disguise categories.
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- 05. Experimental Validation: Lab vs. Real-World -->
      <section class="story-section" id="experiments">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 20px;">
            <div class="story-kicker">05 / Experimental Evaluation</div>
            <h2>Empirical Results: Laboratory vs. Real-World Deployment.</h2>
            <p>We conducted extensive empirical comparisons against state-of-the-art single-modality baselines (RGB-only detectors and Thermal-only detectors). Our proposed multimodal SCF-DETR framework consistently achieves higher recall and precision, especially under extreme backlighting and multi-angle camera perspectives.</p>
          </div>

          <div class="story-comparison-grid">
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/Testing_on_IISFD_in_lab.jpg" alt="Testing on IISFD in laboratory" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 5 · Controlled Laboratory Evaluation</strong>
                Accurate bounding box localization and disguise classification under controlled illumination, baseline camera distances, and standard poses.
              </figcaption>
            </figure>

            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/Testing_on_IISFD_in_realworld.jpg" alt="Testing on IISFD in real-world surveillance" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 6 · Real-World Surveillance Validation</strong>
                Robust disguise detection validated in realistic public corridors and elevator lobbies with uncontrolled ambient lighting and variable viewpoints.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 06. Publications & Citations -->
      <section class="story-section shade" id="publication">
        <div class="detail-wrap detail-columns">
          <div>
            <div class="story-kicker">06 / Scholarly Output</div>
            <h2>Manuscript &amp; Research Affiliation.</h2>
            <p>This research was conducted as part of the IITP video surveillance intelligence initiative at Sejong University.</p>
          </div>
          <div>
            <div class="resource-card" style="padding: 24px; background: var(--paper); border: 1px solid var(--line); border-radius: 10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
                <span class="pub-eyebrow">Journal Manuscript</span>
                <span class="pub-badge-prep">In Preparation</span>
              </div>
              <h3 style="font: 800 17px/1.4 Manrope, sans-serif; margin: 0 0 10px; color: var(--ink);">Transformer-based Facial Disguise Detection Using Multimodal Fusion of Visible and Thermal IR Images</h3>
              <p style="font-size: 13.5px; color: var(--muted); margin: 0 0 10px;"><strong>Authors:</strong> N.-N. Truong, S.-G. Kong</p>
              <p style="font-size: 13.5px; color: var(--muted); margin: 0 0 12px;"><strong>Target Journal:</strong> <em>Information Fusion</em> (Elsevier, Q1)</p>
              <p style="font-size: 12.5px; color: var(--muted); margin: 0 0 18px;"><strong>Affiliation:</strong> Imaging and Intelligent Systems Laboratory (IISLAB), Department of Computer Science &amp; Engineering, Sejong University, Seoul, South Korea.</p>
              <a href="https://nhandoremon.github.io/TruongNgheNhan/project_facial_disguise.html" target="_blank" rel="noopener" class="story-link-academic">Original Academic Project Archive ↗</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }



  // =========================================================================
  // Story-driven Renderers: Sign Language Projects (Split into 2)
  // =========================================================================

  function renderSignArmStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#demo">▶ Watch Prosthetic Arm Demo ↓</a>
        <a class="detail-button secondary" href="#mechanism">Mechanical Design ↓</a>
        <a class="detail-button secondary" href="#vision-pipeline">Vision AI Pipeline ↓</a>
        <a class="detail-button secondary" href="#publication">IEEE IWIS 2022 Paper ↓</a>
        <a class="detail-button secondary" href="index.html#academic">All academic work ↗</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- 01. Overview & Concept -->
      <section class="story-section" id="overview">
        <div class="detail-wrap">
          <div class="story-split">
            <div>
              <div class="story-kicker">01 / Motivation &amp; Concept</div>
              <h2>Physical Embodiment for Deaf Classroom Interaction.</h2>
              <p>Special education for hearing-impaired children faces steep hurdles when instructional tools lack real-time, two-way tangible feedback. Flat 2D monitor displays often struggle to communicate subtle finger depth, spatial orientation, and physical articulation.</p>
              <p>This project introduces an interactive teaching station pairing computer vision gesture recognition with a custom-engineered 3D-printed electromechanical prosthetic arm. The system tracks learner hand signs in real time while the prosthetic arm mirrors finger kinematics synchronously, creating an engaging and intuitive demonstration loop.</p>
              <ul class="story-points">
                <li><strong>Biomimetic Scale:</strong> 53cm height electromechanical prosthetic arm mounted on an interactive desktop enclosure.</li>
                <li><strong>Tendon-driven Actuation:</strong> 5 independent micro servos pulling synthetic finger cables to reproduce anatomical joint flexion.</li>
                <li><strong>Edge Processing:</strong> Self-contained interaction station integrating webcam, processing unit, and feedback screen.</li>
              </ul>
            </div>
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/hand_sign.png" alt="Interactive Prosthetic Arm Architecture" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 1 · Hardware Architecture &amp; Classroom Setup</strong>
                Integrated teaching station connecting laptop webcam, interactive touchscreen display, and 3D-printed prosthetic demonstration arm.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 02. Live Operational Video Demonstration -->
      <section class="story-section shade" id="demo">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">02 / Operational Demonstration</div>
            <h2>Real-Time Gesture Tracking Driving Prosthetic Articulation.</h2>
            <p>Live operational demonstration showing learner sign recognition driving synchronized finger curling and knuckle actuation on the 3D-printed prosthetic arm:</p>
          </div>
          <div class="detail-video-wrapper">
            <iframe src="https://www.youtube.com/embed/aV66T-wygk0?si=G2KrTVVQwz4sC249" title="Prosthetic Arm Sign Language Live Demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p class="video-caption">Live Operational Demonstration: Real-time hand sign recognition driving synchronized 3D electromechanical prosthetic arm articulation.</p>
        </div>
      </section>

      <!-- 03. Mechanical Kinematics & Tendon Network -->
      <section class="story-section" id="mechanism">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">03 / Mechatronic Design</div>
            <h2>Biomimetic Kinematics &amp; Tendon-Driven Actuation.</h2>
            <p>The prosthetic arm is engineered to replicate human hand anatomy with lightweight materials, modular assembly, and individual finger control:</p>
          </div>
          <div class="story-comparison-grid">
            <div class="story-figure">
              <figcaption>
                <strong>3D-Printed Anatomical Geometry</strong>
                Fabricated with precision PLA polymers for low rotational inertia and high structural durability under continuous classroom usage. Phalanges are dimensioned based on human anthropometric averages with low-friction pivot joints.
              </figcaption>
            </div>
            <div class="story-figure">
              <figcaption>
                <strong>Tendon-Driven Cable Actuation</strong>
                Five independent high-torque micro servos house tensioned synthetic cables routed through inner phalangeal channels. Servo angular displacement directly pulls the cables, producing smooth, bio-fidelic finger curling motions.
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      <!-- 04. Computer Vision AI Pipeline -->
      <section class="story-section shade" id="vision-pipeline">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">04 / Vision Intelligence</div>
            <h2>Dual-Stage Vision Pipeline: 21 Landmarks + YOLO + GRU.</h2>
            <p>Accurate sign language interpretation requires handling both instantaneous hand shapes and spatio-temporal motion paths:</p>
          </div>
          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">01 · Skeletal Tracking</span>
              <h3>MediaPipe 21 3D Landmarks</h3>
              <p>Extracts 21 3D hand keypoints in real time from monocular RGB video, maintaining spatial robustness across varying skin tones, hand scales, and ambient room lighting.</p>
            </div>
            <div class="pillar-card">
              <span class="pillar-badge">02 · Static Classification</span>
              <h3>YOLO Handshape Detection</h3>
              <p>Lightweight convolutional detector optimized for classifying static alphabet letters and numeric digits with low latency, enabling immediate posture verification.</p>
            </div>
            <div class="pillar-card">
              <span class="pillar-badge">03 · Dynamic Sequences</span>
              <h3>Gated Recurrent Unit (GRU)</h3>
              <p>Recurrent temporal network tracking multi-frame trajectory vectors of wrist and finger joints to classify complex, continuous word gestures.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 05. Scholarly Publication -->
      <section class="story-section" id="publication">
        <div class="detail-wrap detail-columns">
          <div>
            <div class="story-kicker">05 / Scholarly Output</div>
            <h2>Peer-Reviewed IEEE Conference Publication.</h2>
            <p>The system methodology, kinematic design, and classroom experiments were presented and published at IEEE IWIS 2022 in Ulsan, South Korea.</p>
            <div style="margin-top: 24px;">
              <a href="https://nhandoremon.github.io/TruongNgheNhan/project_handsign.html" target="_blank" rel="noopener" class="story-link-academic">Original Academic Project Archive ↗</a>
            </div>
          </div>
          <div>
            <div class="resource-card" style="padding: 24px 26px; background: var(--paper); border: 1px solid var(--line); border-radius: 12px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
                <span class="pub-eyebrow">IEEE IWIS 2022 · Published</span>
                <span class="pub-badge-first">First Author</span>
              </div>
              <h3 style="font: 800 16px/1.4 Manrope, sans-serif; margin: 0 0 8px; color: var(--ink);">A Vision-based Hand-sign Language Teaching System using Deep Neural Network: Methodology and Experiments</h3>
              <p style="font-size: 13px; color: var(--muted); margin: 0 0 12px; line-height: 1.5;">N.-N. Truong, T.-D. Do, T.-S. Le Nguyen, M.-T. Duong, T.-H. Nguyen, M.-H. Le</p>
              <p style="font-size: 12px; color: #768f9b; margin: 0 0 16px;">2022 International Workshop on Intelligent Systems (IWIS), Ulsan, Korea, pp. 1–6.</p>
              <a class="pub-link-btn" href="https://ieeexplore.ieee.org/document/9920883" target="_blank" rel="noopener" class="pub-link-anchor">IEEE Xplore Official Record ↗</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderSignVNStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#web-demo">▶ Watch Web Demo ↓</a>
        <a class="detail-button secondary" href="#ai-modules">Three AI Breakthroughs ↓</a>
        <a class="detail-button secondary" href="#publications">GTSD 2026 Papers (3) ↓</a>
        <a class="detail-button secondary" href="https://nguyenvandang24578.github.io/SignLaguage_Web_Application/" target="_blank" rel="noopener">Open Live Web Platform ↗</a>
        <a class="detail-button secondary" href="https://vydat-1702.github.io/HandSignLanguage_Portfolio/index.html" target="_blank" rel="noopener">VSL Team Portfolio ↗</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- 01. Mission & Web Platform Overview -->
      <section class="story-section" id="mission">
        <div class="detail-wrap">
          <div class="story-split">
            <div>
              <div class="story-kicker">01 / Social Mission &amp; Web Platform</div>
              <h2>Democratizing Sign Language Education via Web &amp; Cloud.</h2>
              <p>While physical robotic hands provide great engagement in specialized labs, scaling special education nationwide requires removing all cost barriers. SignVN is an open-access web ecosystem that transforms any consumer laptop or smartphone with a basic webcam into an autonomous sign language classroom.</p>
              <p>Learners require no proprietary hardware. The cloud platform supports the full learning lifecycle: structured curriculum progression from alphabet basics to daily dialogues, real-time posture self-correction, and bidirectional translation between spoken Vietnamese and Vietnamese Sign Language (VSL).</p>
              <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:24px;">
                <a class="story-btn-primary" href="https://nguyenvandang24578.github.io/SignLaguage_Web_Application/" target="_blank" rel="noopener">Open Live SignVN Web Platform ↗</a>
                <a class="story-btn-outline" href="https://vydat-1702.github.io/HandSignLanguage_Portfolio/index.html" target="_blank" rel="noopener">Visit VSL Team Research Portfolio ↗</a>
              </div>
            </div>
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/vsl_website.png" alt="SignVN Web Platform Interface" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 1 · SignVN Web Platform Interface</strong>
                Browser-accessible learning hub featuring structured curriculum, practice camera, and 3D avatar animation.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 02. Live Web Platform Video Demonstration -->
      <section class="story-section shade" id="web-demo">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">02 / Live Demonstration</div>
            <h2>Interactive Web Experience &amp; Real-Time Webcam Practice.</h2>
            <p>Comprehensive walkthrough of the SignVN web application demonstrating interactive curriculum lessons, 3D avatar instruction, and webcam practice evaluation:</p>
          </div>
          <div class="detail-video-wrapper">
            <iframe src="https://www.youtube.com/embed/-oyBAX4N_Bs?start=107" title="SignVN Web Application Demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p class="video-caption">Live Demonstration: SignVN Web Application featuring 3D avatar instruction, real-time webcam evaluation, and bilingual translation assistant.</p>
        </div>
      </section>

      <!-- 03. Three AI Pillars Grounded in 3 IEEE GTSD 2026 Papers -->
      <section class="story-section" id="ai-modules">
        <div class="detail-wrap">
          <div style="max-width: 840px; margin-bottom: 24px;">
            <div class="story-kicker">03 / Purpose-Driven AI Architecture</div>
            <h2>Three Core Modules Grounded in 3 IEEE GTSD 2026 Papers.</h2>
            <p>Each core functionality of the SignVN platform is powered by a dedicated peer-reviewed research breakthrough addressing key technical bottlenecks in 3D human pose, real-time edge distillation, and linguistic structuring:</p>
          </div>

          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">01 · Learning Module</span>
              <h3>3D Virtual Avatar Kinematics (TKR-HMR)</h3>
              <p>Solves the limitation of flat 2D instructional videos by recovering full 3D expressive human mesh avatars from ordinary video. Learners can freely rotate the model 360° to inspect hand depth, finger curvature, and wrist angles.</p>
              <div class="pillar-paper">
                <strong>IEEE GTSD 2026 · Co-first Author</strong>
                TKR-HMR: Tokenized Kinematic Representation for Human Mesh Recovery from Video
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">02 · Testing &amp; Scoring Module</span>
              <h3>Multi-View RGB-D Knowledge Distillation</h3>
              <p>Enables students to practice signs in front of a standard webcam and receive immediate scoring. Trained on laboratory multi-camera RGB-D depth arrays, the knowledge is distilled into an ultra-compact single-view model executable directly inside the browser.</p>
              <div class="pillar-paper">
                <strong>IEEE GTSD 2026 · Co-first Author</strong>
                From Multi-View RGB-D to Single-View: Fusion and Distillation for Efficient Sign Language Recognition
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">03 · Assistant Module (VNSignMate)</span>
              <h3>Hybrid Agentic Architecture &amp; RAG</h3>
              <p>Bridges the severe grammatical disparity between written Vietnamese syntax and VSL spatial grammar. Employs multi-agent orchestration and retrieval-augmented generation to restructure vocabulary into accurate sign order for bidirectional communication.</p>
              <div class="pillar-paper">
                <strong>IEEE GTSD 2026 · Co-first Author</strong>
                Hybrid Agentic Architecture for Vietnamese Sign Language: Orchestrating RAG and Syntactic Restructuring
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 04. Scholarly Output (3 IEEE GTSD 2026 Papers) -->
      <section class="story-section shade" id="publications">
        <div class="detail-wrap detail-columns">
          <div>
            <div class="story-kicker">04 / Scholarly Output</div>
            <h2>Research Publications (3 IEEE GTSD 2026 Papers).</h2>
            <p>Peer-reviewed conference publications documenting our cutting-edge AI contributions published in IEEE Xplore.</p>
            <div style="margin-top: 24px; display:grid; gap:10px;">
              <a href="https://vydat-1702.github.io/HandSignLanguage_Portfolio/index.html" target="_blank" rel="noopener" class="story-link-academic">VSL Team Research Portfolio ↗</a>
              <a href="https://nguyenvandang24578.github.io/SignLaguage_Web_Application/" target="_blank" rel="noopener" class="story-link-academic">Live SignVN Web Application ↗</a>
            </div>
          </div>
          <div style="display:grid; gap: 14px;">
            <!-- Paper 1: TKR-HMR -->
            <div class="resource-card" style="padding: 20px 22px; background: var(--paper); border: 1px solid var(--line); border-radius: 10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
                <span class="pub-eyebrow">IEEE GTSD 2026 · Published</span>
                <span class="pub-badge-cofirst">Co-First Author</span>
              </div>
              <h3 style="font: 800 15px/1.4 Manrope, sans-serif; margin: 0 0 6px; color: var(--ink);">TKR-HMR: Tokenized Kinematic Representation for Human Mesh Recovery from Video</h3>
              <p style="font-size: 12.5px; color: var(--muted); margin: 0 0 10px;">V. D. Nguyen*, N.-N. Truong*, T.-D. Dao, D. N.-L. Vy, M.-H. Le</p>
              <a class="pub-link-anchor" href="https://ieeexplore.ieee.org/document/11722383" target="_blank" rel="noopener">IEEE Xplore ↗</a>
            </div>

            <!-- Paper 2: Distillation -->
            <div class="resource-card" style="padding: 20px 22px; background: var(--paper); border: 1px solid var(--line); border-radius: 10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
                <span class="pub-eyebrow">IEEE GTSD 2026 · Published</span>
                <span class="pub-badge-cofirst">Co-First Author</span>
              </div>
              <h3 style="font: 800 15px/1.4 Manrope, sans-serif; margin: 0 0 6px; color: var(--ink);">From Multi-View RGB-D to Single-View: Fusion and Distillation for Efficient Sign Language Recognition</h3>
              <p style="font-size: 12.5px; color: var(--muted); margin: 0 0 10px;">T.-D. Dao*, N.-N. Truong*, D. N.-L. Vy, V. D. Nguyen, M.-H. Le</p>
              <a class="pub-link-anchor" href="https://ieeexplore.ieee.org/document/11722506" target="_blank" rel="noopener">IEEE Xplore ↗</a>
            </div>

            <!-- Paper 3: Hybrid Agentic -->
            <div class="resource-card" style="padding: 20px 22px; background: var(--paper); border: 1px solid var(--line); border-radius: 10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
                <span class="pub-eyebrow">IEEE GTSD 2026 · Published</span>
                <span class="pub-badge-cofirst">Co-First Author</span>
              </div>
              <h3 style="font: 800 15px/1.4 Manrope, sans-serif; margin: 0 0 6px; color: var(--ink);">Hybrid Agentic Architecture for Vietnamese Sign Language: Orchestrating RAG and Syntactic Restructuring</h3>
              <p style="font-size: 12.5px; color: var(--muted); margin: 0 0 10px;">D. N.-L. Vy*, N.-N. Truong*, V. D. Nguyen, T.-D. Dao, M.-H. Le</p>
              <a class="pub-link-anchor" href="https://ieeexplore.ieee.org/document/11722489" target="_blank" rel="noopener">IEEE Xplore ↗</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }



  function renderAbnormalStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#demos">Watch 6 KISA Benchmark Demos ↓</a>
        <a class="detail-button secondary" href="#pipeline">3-Stage AI Pipeline ↓</a>
        <a class="detail-button secondary" href="#standard">KISA Certification ↓</a>
        <a class="detail-button secondary" href="#affiliation">IITP / IISLAB Info ↓</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- 01. Motivation & National Government Mandate -->
      <section class="story-section" id="mandate">
        <div class="detail-wrap">
          <div class="story-split">
            <div>
              <div class="story-kicker">01 / Government Mandate &amp; Public Safety</div>
              <h2>Securing Urban Infrastructure Against Operator Fatigue.</h2>
              <p>Municipal surveillance operations across South Korea monitor tens of thousands of concurrent closed-circuit camera streams spanning transit terminals, crosswalks, alleyways, and public plazas. Human operators suffer cognitive exhaustion within 20 minutes of continuous observation, leading to perilous security blind spots where acute incidents go unheeded.</p>
              <p>Conventional heuristic motion detectors overwhelm control centers with false alarms triggered by headlights, adverse weather, wind-blown trees, and passing animals. Sponsored by the <strong>Institute of Information &amp; Communications Technology Planning &amp; Evaluation (IITP)</strong> under the <strong>Ministry of Science and ICT (MSIT)</strong>, South Korea, this research was conducted at <strong>Sejong University (IISLAB)</strong> to engineer a real-time, false-alarm-resilient spatio-temporal AI perception engine certified against the national <strong>KISA Intelligent CCTV Standards</strong>.</p>
              <ul class="story-points">
                <li><strong>National Benchmark Compliance:</strong> Evaluated rigorously against official KISA certified intelligent CCTV test suites for public municipal safety.</li>
                <li><strong>False-Alarm Suppression:</strong> Kinematic skeletal modeling decouples true bodily distress from ambient lighting variations, rain, and shadow artifacts.</li>
                <li><strong>Real-Time Multi-Target Edge Throughput:</strong> Concurrent multi-person tracking and sequential behavior classification operating with low latency on 30 FPS surveillance streams.</li>
              </ul>
            </div>
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/cctv.jpg" alt="Municipal CCTV Surveillance Testbed" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 1 · Municipal CCTV Multi-Target Testbed</strong>
                High-density urban surveillance monitoring with multi-object detection, bounding box association, and skeletal keypoint estimation.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 02. KISA Intelligent CCTV Certification Framework -->
      <section class="story-section shade" id="standard">
        <div class="detail-wrap">
          <div style="max-width: 840px; margin-bottom: 28px;">
            <div class="story-kicker">02 / National Certification Standard</div>
            <h2>The KISA Intelligent CCTV Certification Framework.</h2>
            <p>The <strong>Korea Internet &amp; Security Agency (KISA)</strong> administers South Korea's official performance certification for commercial and academic video analytics deployed across municipal safety grids and critical infrastructure. To achieve compliance, algorithms must surpass rigorous quantitative hurdles across unconstrained surveillance footage:</p>
          </div>

          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Criterion 01 · Latency</span>
              <h3>Strict Temporal Window (≤ 2–5s)</h3>
              <p>Detection must reliably fire within 2 to 5 seconds from the physical inception of an anomalous event. Delayed alarms fail certification as they hinder immediate emergency operator dispatch.</p>
              <div class="pillar-paper">
                <strong>Certification Threshold</strong>
                F1-Score ≥ 90% within initial temporal boundary
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Criterion 02 · Precision</span>
              <h3>Kinematic Ambiguity Discrimination</h3>
              <p>The system must strictly distinguish benign human routines (tying shoelaces, sitting on steps, stretching, picking up dropped items) from authentic emergencies such as syncope or violent scuffles.</p>
              <div class="pillar-paper">
                <strong>Zero-Disturbance Guarantee</strong>
                Negligible false alarms on non-critical actions
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Criterion 03 · Coverage</span>
              <h3>6 Standardized Anomaly Suites</h3>
              <p>Certified validation across six mandatory public safety incident classes: <em>Falldown, Violence, Perimeter Intrusion, Suspicious Loitering, Unattended Abandonment, and Early Fire/Smoke</em>.</p>
              <div class="pillar-paper">
                <strong>Multi-Scenario Resilience</strong>
                Indoor, outdoor, day, night &amp; crowd occlusions
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 03. 3-Stage End-to-End AI Architecture -->
      <section class="story-section" id="pipeline">
        <div class="detail-wrap">
          <div style="max-width: 840px; margin-bottom: 28px;">
            <div class="story-kicker">03 / Algorithmic Architecture</div>
            <h2>From Raw Surveillance Pixels to Spatio-Temporal Semantics.</h2>
            <p>To deliver real-time execution across multiple camera channels while eliminating sensitivity to clothing color, shadows, and weather, the system is designed around a three-tier decoupled pipeline:</p>
          </div>

          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Stage 1 · Multi-Target Tracking</span>
              <h3>YOLOv8 + DeepSORT / ByteTrack</h3>
              <p>Localizes all pedestrian bounding boxes at high frame rates. Deep metric appearance embeddings coupled with Kalman filter state estimation preserve persistent tracking IDs across mutual occlusions and crowd crossovers.</p>
              <div class="pillar-paper">
                <strong>Key Capability</strong>
                Persistent Identity Tracklets under dense crowd occlusions
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Stage 2 · Skeletal Dynamics</span>
              <h3>ViTPose (17 Anatomical Keypoints)</h3>
              <p>Employs Vision Transformer pose estimation to extract 17 skeletal joint coordinates (head, shoulders, elbows, wrists, hips, knees, ankles). Converts volatile pixel textures into illumination-invariant geometric kinematic vectors.</p>
              <div class="pillar-paper">
                <strong>Key Capability</strong>
                Illumination &amp; clothing texture invariance
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Stage 3 · Temporal Modeling</span>
              <h3>Sliding-Window Action Dynamics</h3>
              <p>Evaluates spatio-temporal dynamics over sliding temporal buffers. Continuously calculates joint angular accelerations, velocity vectors, and center-of-gravity shifts to detect sudden deviations from benign locomotion baselines.</p>
              <div class="pillar-paper">
                <strong>Key Capability</strong>
                Instantaneous detection within ≤ 2s of physical anomaly onset
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 04. Qualitative Validation: 6 KISA Anomaly Suites & 12 Video Demos -->
      <section class="story-section shade" id="demos">
        <div class="detail-wrap">
          <div style="max-width: 840px; margin-bottom: 12px;">
            <div class="story-kicker">04 / Qualitative Validation</div>
            <h2>KISA Certified Anomaly Evaluation: 6 Suites &amp; 12 Video Demos.</h2>
            <p>Below are 12 evaluation video recordings captured under authentic surveillance environments, verifying the system's detection capabilities across all six certified KISA anomaly classes:</p>
          </div>

          <!-- Quick Navigation Bar for 6 Classes -->
          <nav class="kisa-nav-bar" aria-label="KISA Suites Navigation">
            <span class="kisa-nav-label">Jump to Suite:</span>
            <a class="kisa-nav-pill" href="#class-falldown">01 · Falldown</a>
            <a class="kisa-nav-pill" href="#class-violence">02 · Violence</a>
            <a class="kisa-nav-pill" href="#class-intrusion">03 · Intrusion</a>
            <a class="kisa-nav-pill" href="#class-loitering">04 · Loitering</a>
            <a class="kisa-nav-pill" href="#class-abandonment">05 · Abandonment</a>
            <a class="kisa-nav-pill" href="#class-fire">06 · Fire &amp; Smoke</a>
          </nav>

          <!-- Class 01: Falldown -->
          <div class="kisa-class-block" id="class-falldown">
            <div class="kisa-class-header">
              <div class="kisa-class-meta">
                <span class="kisa-badge">KISA Certified · Class 01</span>
                <h3>Falldown Detection <span class="kisa-kr-name">(쓰러짐 / 낙상)</span></h3>
              </div>
              <div class="kisa-mechanics-tag">Center-of-Gravity Inversion &bull; Sustained Immobility</div>
            </div>
            <p class="kisa-class-desc">
              Detects acute pedestrian collapse, cardiac arrest syncope, or accidental trips. The system continuously tracks the vertical descent velocity of hip and thoracic keypoints (<em>&Delta;y / &Delta;t</em>) and spine inclination angle. An alarm is locked in when the skeletal posture shifts from vertical to horizontal within &lt; 0.9s and remains immobile.
            </p>
            <div class="kisa-video-grid">
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Falldown_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario A · Sudden Outdoor Pavement Collapse</h4>
                  <p>Daytime ambient illumination. The subject collapses abruptly onto concrete pavement; the vertical velocity threshold triggers an alarm at 1.1s without confusion from walking pedestrians.</p>
                </div>
              </div>
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Falldown_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario B · Indoor Corridor Syncope</h4>
                  <p>Indoor corridor lighting with low clothing-to-floor contrast. ViTPose maintains continuous 17-keypoint skeletal tracking through the entire impact and post-collapse immobility phase.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Class 02: Violence -->
          <div class="kisa-class-block" id="class-violence">
            <div class="kisa-class-header">
              <div class="kisa-class-meta">
                <span class="kisa-badge">KISA Certified · Class 02</span>
                <h3>Violence &amp; Physical Altercation <span class="kisa-kr-name">(폭력 / 싸움)</span></h3>
              </div>
              <div class="kisa-mechanics-tag">Chaotic Limb Acceleration &bull; Mutual Proximity Violation</div>
            </div>
            <p class="kisa-class-desc">
              Flags aggressive physical assaults, punching, kicking, and violent brawls. The algorithm measures high-frequency reciprocal velocity spikes between extremity keypoints (wrists and elbows) across two or more interacting tracking IDs within close spatial proximity (&lt; 1.0m), filtering out benign gestures such as high-fives or handshakes.
            </p>
            <div class="kisa-video-grid">
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Violence_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario A · Sudden Physical Brawl in Transit Space</h4>
                  <p>High-energy lunges and defensive arm blocks between two individuals detected immediately as kinetic velocity spikes violate normal interaction bounds.</p>
                </div>
              </div>
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Violence_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario B · Close-Range Multi-Person Altercation</h4>
                  <p>Aggressive grappling and rapid bodily directional changes flagged within 1.3s of first contact, maintaining dual-target tracking under partial body occlusions.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Class 03: Intrusion -->
          <div class="kisa-class-block" id="class-intrusion">
            <div class="kisa-class-header">
              <div class="kisa-class-meta">
                <span class="kisa-badge">KISA Certified · Class 03</span>
                <h3>Perimeter Intrusion <span class="kisa-kr-name">(침입 / 월경)</span></h3>
              </div>
              <div class="kisa-mechanics-tag">Virtual Geofence Boundary &bull; Ankle Keypoint Intersection</div>
            </div>
            <p class="kisa-class-desc">
              Enforces automated security perimeters across prohibited municipal zones (railway safety boundaries, restricted gates, perimeter fences). Operators define arbitrary polygonal geofences; the system computes continuous point-in-polygon intersection tests on estimated ankle and foot contact keypoints to trigger zero-delay intrusion alerts.
            </p>
            <div class="kisa-video-grid">
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Instrusion_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario A · Railway Safety Boundary Ingress</h4>
                  <p>A pedestrian steps across the designated yellow railway danger line; the spatial intersection test instantly fires an intrusion alert the moment foot keypoints cross the line.</p>
                </div>
              </div>
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Instrusion_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario B · Restricted Facility Perimeter Breach</h4>
                  <p>Subject entering a restricted corridor boundary; the tracking pipeline establishes identity lock and logs directional intrusion vector coordinates.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Class 04: Loitering -->
          <div class="kisa-class-block" id="class-loitering">
            <div class="kisa-class-header">
              <div class="kisa-class-meta">
                <span class="kisa-badge">KISA Certified · Class 04</span>
                <h3>Suspicious Loitering <span class="kisa-kr-name">(배회 / 이상 체류)</span></h3>
              </div>
              <div class="kisa-mechanics-tag">Convex-Hull Trajectory Accumulation &bull; Temporal Threshold (T > 20s)</div>
            </div>
            <p class="kisa-class-desc">
              Identifies casing, suspicious hovering, or erratic lingering in vulnerable public areas. The system accumulates spatial trajectory heatmaps for each tracking ID. If a subject remains confined within a localized radius (<em>r &lt; 3.5m</em>) for a cumulative duration exceeding the safety threshold (<em>T &gt; 20s</em>), an escalation warning is issued.
            </p>
            <div class="kisa-video-grid">
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Loitering_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario A · Repetitive Circular Trajectory in Corridor</h4>
                  <p>Pedestrian pacing back and forth in an empty facility corridor. Cumulative trajectory bounding box exceeds temporal residency limit, activating loitering status.</p>
                </div>
              </div>
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Loitering_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario B · Prolonged Lingering Near Building Entryway</h4>
                  <p>Subject remaining stationary near access doorway; persistent temporal tracking confirms loitering while ignoring passing transit pedestrians.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Class 05: Abandonment -->
          <div class="kisa-class-block" id="class-abandonment">
            <div class="kisa-class-header">
              <div class="kisa-class-meta">
                <span class="kisa-badge">KISA Certified · Class 05</span>
                <h3>Unattended Object / Abandonment <span class="kisa-kr-name">(유기 / 방치)</span></h3>
              </div>
              <div class="kisa-mechanics-tag">Owner-Object Spatial Disassociation &bull; Static Hold Timer</div>
            </div>
            <p class="kisa-class-desc">
              Counter-terrorism and unattended baggage surveillance in crowded transport hubs. The system establishes a topological association between human bounding boxes and carried objects (luggage, backpacks, packages). If the owner moves beyond spatial separation distance (<em>d &gt; 4.0m</em>) and the object remains static for &gt; 10s, an abandonment alert triggers.
            </p>
            <div class="kisa-video-grid">
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Abandonment_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario A · Transit Platform Luggage Deposition</h4>
                  <p>Subject places suitcase on station platform and walks away out of camera view; distance dissociation triggers countdown timer and security alert.</p>
                </div>
              </div>
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Abandonment_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario B · Hallway Unattended Backpack Abandonment</h4>
                  <p>Backpack left adjacent to corridor wall. The system isolates the stationary bounding box and triggers automated alert after temporal expiry.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Class 06: Fire Detection -->
          <div class="kisa-class-block" id="class-fire">
            <div class="kisa-class-header">
              <div class="kisa-class-meta">
                <span class="kisa-badge">KISA Certified · Class 06</span>
                <h3>Early Fire &amp; Smoke Inception <span class="kisa-kr-name">(화재·연기 / 방화)</span></h3>
              </div>
              <div class="kisa-mechanics-tag">Optical Flow Plume Expansion &bull; Chrominance Flicker Dynamics</div>
            </div>
            <p class="kisa-class-desc">
              Provides early visual warning of fire outbreaks and rising smoke plumes seconds before physical ceiling smoke or thermal sensors reach activation threshold. Analyzes high-frequency chromatic flicker, turbulent edge blurring, and upward convective optical flow vectors across localized image patches.
            </p>
            <div class="kisa-video-grid">
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Fire_Detection_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario A · Rapid Indoor Ignition &amp; Flame Breakout</h4>
                  <p>Initial flame breakout detected within 1.2s of ignition onset based on spectral flicker and intensity expansion before smoke fills the room.</p>
                </div>
              </div>
              <div class="video-card">
                <video controls preload="metadata" playsinline>
                  <source src="assets/video/Fire_Detection_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div class="video-card-body">
                  <h4>Scenario B · Ascending Smoke Plume Dispersion</h4>
                  <p>Upward convective smoke plume dynamics identified and tracked through optical flow analysis, providing critical early evacuation warning.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 05. Institutional Affiliation & Korean Government Grant -->
      <section class="story-section" id="affiliation">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">05 / Research Affiliation &amp; Heritage</div>
            <h2>Korean Government Research Grant &amp; IISLAB Foundations.</h2>
            <p>This project represents foundational research conducted during the early stage of Nghe-Nhan Truong's Master's program at Sejong University under the Intelligent Information Systems Laboratory (IISLAB):</p>
          </div>

          <div class="story-comparison-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Grant Sponsorship</span>
              <h3>IITP &amp; MSIT Government Funding</h3>
              <p>Supported by the <strong>Institute of Information &amp; Communications Technology Planning &amp; Evaluation (IITP)</strong> grant funded by the <strong>Korea government (Ministry of Science and ICT - MSIT)</strong> for intelligent public video surveillance and CCTV safety automation.</p>
              <div class="pillar-paper">
                <strong>Funding Body</strong>
                IITP / MSIT, Republic of Korea
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Academic Laboratory</span>
              <h3>IISLAB &bull; Sejong University</h3>
              <p>Executed at the <strong>Intelligent Information Systems Laboratory (IISLAB)</strong>, Room 711, Daeyang AI Center, Sejong University, Seoul, under the supervision of <strong>Prof. Seong-Gwon Kong</strong>.</p>
              <div class="pillar-paper">
                <strong>Research Period</strong>
                M.S. Program (Fall 2023 – Spring 2024)
              </div>
            </div>
          </div>

          <div style="margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; align-items: center;">
            <a class="story-btn-primary" href="https://nhandoremon.github.io/TruongNgheNhan/project_abnormal.html" target="_blank" rel="noopener">
              View Original Academic Archive ↗
            </a>
            <a class="story-btn-outline" href="project.html?id=smoke">
              Companion Project: Human in Heavy Smoke →
            </a>
            <a class="story-btn-outline" href="index.html#academic">
              All Academic Work →
            </a>
          </div>
        </div>
      </section>
    `;
  }



  function renderSmokeStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#hardware">View Hardware &amp; Drone Payload ↓</a>
        <a class="detail-button secondary" href="#fusion-method">Fusion Pipeline ↓</a>
        <a class="detail-button secondary" href="#dataset">3,000-Image Dataset ↓</a>
        <a class="detail-button secondary" href="#experiments">Edge Results ↓</a>
        <a class="detail-button secondary" href="#publication">IEEE ICSSE Paper ↓</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- 01. Motivation: Zero-Visibility Fires & Rescue Drone Mission -->
      <section class="story-section" id="challenge">
        <div class="detail-wrap">
          <div class="story-split">
            <div>
              <div class="story-kicker">01 / Real-World Disaster Challenge</div>
              <h2>Penetrating Zero-Visibility Smoke in Emergency Search &amp; Rescue.</h2>
              <p>During structural fires, enclosed warehouse blazes, and industrial chemical disasters, heavy combustion smoke and soot particulates (0.1–1.0 &mu;m) cause catastrophic Rayleigh and Mie scattering across the visible spectrum (RGB 400–700nm). Human vision and standard optical surveillance cameras suffer total visual extinction.</p>
              <p>Firefighters face extreme peril entering burning structures blindly. Every minute lost searching through opaque smoke sharply reduces survivor resuscitation windows. To overcome this critical bottleneck, this research conceived an autonomous multimodal perception payload engineered to be mounted on <strong>Search-and-Rescue UAVs (Rescue Drones)</strong>. The drone penetrates hazardous smoke-filled corridors remotely, scanning enclosed chambers to locate unconscious victims and relay real-time thermal telemetry before rescue crews step into danger.</p>
              <ul class="story-points">
                <li><strong>Optical Camera Failure:</strong> High soot concentration completely scatters visible photons, reducing standard camera visibility to near zero.</li>
                <li><strong>Airborne Drone Reconnaissance:</strong> Lightweight modular payload design suitable for search-and-rescue drones exploring collapsing structures.</li>
                <li><strong>Autonomous Edge Processing:</strong> Onboard NVIDIA Jetson Nano inference eliminates reliance on vulnerable RF video telemetry inside concrete rubble.</li>
              </ul>
            </div>
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/Human_insmoke.jpg" alt="Thermal vs Visual in Heavy Smoke" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 1 · The Visibility Extinction Barrier in Heavy Smoke</strong>
                Visual comparison demonstrating complete optical camera failure versus the penetrative capacity of thermal-infrared radiation detecting human survivors.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 02. Integrated Edge Hardware: Jetson Nano + Dual-Sensor Payload -->
      <section class="story-section shade" id="hardware">
        <div class="detail-wrap">
          <div class="story-split reverse">
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/human_detection_hardware_system.png" alt="Hardware Payload Architecture" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 2 · Custom Dual-Sensor Hardware Payload &amp; NVIDIA Jetson Nano</strong>
                Integrated prototype showing labeled Thermal Camera, IR Camera, Dual IR Lighting, and NVIDIA Jetson Nano edge processor on pan/tilt mount.
              </figcaption>
            </figure>
            <div>
              <div class="story-kicker">02 / Embedded Edge Hardware Architecture</div>
              <h2>Dual-Camera Sensing Payload &amp; Jetson Nano Edge Computing.</h2>
              <p>To operate effectively in zero-visibility smoke on a flying drone, the sensing apparatus must be compact, lightweight, and self-contained with onboard computational capability:</p>
              <div class="story-points">
                <div>
                  <strong>Thermal Camera (LWIR 8–14 &mu;m):</strong>
                  Uncooled long-wave infrared microbolometer detecting subcutaneous metabolic body heat (36.5°C–37.5°C). Penetrates soot particles to highlight human heat silhouettes regardless of ambient lighting.
                </div>
                <div style="margin-top: 10px;">
                  <strong>Near-Infrared (NIR) Camera &amp; Active IR Lighting:</strong>
                  Captures near-infrared surface reflectivity while dual active IR illuminators cast non-visible illumination, delineating room obstacles, doors, and walls without blinding the thermal sensor.
                </div>
                <div style="margin-top: 10px;">
                  <strong>NVIDIA Jetson Nano Processing Unit:</strong>
                  Houses a 128-core Maxwell GPU running TensorRT-optimized deep learning inference onboard the drone at low wattage (5–10W), guaranteeing real-time detection without latency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 03. Cross-Spectral Calibration & Feature Fusion -->
      <section class="story-section" id="fusion-method">
        <div class="detail-wrap">
          <div style="max-width: 840px; margin-bottom: 28px;">
            <div class="story-kicker">03 / Sensor Fusion &amp; Calibration</div>
            <h2>Active Heated Target Calibration &amp; Cross-Spectral Fusion.</h2>
            <p>Because infrared and thermal cameras possess different focal lengths, lens distortions, and physical vantage baselines, direct pixel overlay is infeasible. The framework bridges this gap through a two-stage registration and fusion architecture:</p>
          </div>

          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Stage 01 · Calibration</span>
              <h3>Active Heated Planar Target</h3>
              <p>Engineered a custom heated chessboard calibration target. Emissive heating produces high contrast in the LWIR spectrum while checkerboard pigments reflect active NIR light, enabling sub-pixel corner detection across both spectra simultaneously.</p>
              <div class="pillar-paper">
                <strong>Optical Registration</strong>
                Homography Matrix (H) pixel-to-pixel mapping
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Stage 02 · Fusion</span>
              <h3>Cross-Spectral Feature Fusion</h3>
              <p>Combines high-gradient NIR surface texture with LWIR thermal radiometry. This cross-spectral synthesis eliminates false-positive thermal hot spots (such as hot radiator pipes, light fixtures, or embers) by requiring both geometric and thermal compliance.</p>
              <div class="pillar-paper">
                <strong>Clutter Rejection</strong>
                Suppresses false thermal reflections &amp; debris
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Stage 03 · Edge AI</span>
              <h3>TensorRT Edge Optimization</h3>
              <p>Optimized the object detection backbone for the NVIDIA Jetson Nano architecture. Leverages FP16 half-precision quantization to achieve smooth real-time frame rates suitable for closed-loop drone navigation.</p>
              <div class="pillar-paper">
                <strong>Inference Speed</strong>
                Real-time throughput on embedded edge GPU
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 04. Empirical Dataset: 3,000 Paired Smoke Images -->
      <section class="story-section shade" id="dataset">
        <div class="detail-wrap">
          <div class="story-split">
            <div>
              <div class="story-kicker">04 / Empirical Research Dataset</div>
              <h2>Simulated Fireground Chamber: 3,000 Paired IR/Thermal Images.</h2>
              <p>Given the extreme scarcity and hazardous nature of real structural fire datasets, the research team constructed a dedicated artificial smoke simulation chamber at HCMUTE.</p>
              <p>The resulting benchmark comprises <strong>3,000 synchronized multimodal image pairs</strong> capturing human subjects under varied concentrations of dense theatrical smoke and changing ambient illumination levels.</p>
              <ul class="story-points">
                <li><strong>Diverse Emergency Postures:</strong> Covers standing waving for rescue, crouching under rising smoke layers, crawling along floors, and lying unconscious on the ground.</li>
                <li><strong>Multi-Subject Occlusion:</strong> Includes single-victim, dual-victim, and tri-victim scenarios with mutual bodily occlusions and low thermal-background contrast.</li>
                <li><strong>Controlled Smoke Densities:</strong> Ranging from light haze to heavy zero-visibility smoke where visual cameras fail completely.</li>
              </ul>
            </div>
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/Human_datasests.jpg" alt="3000-Image Multimodal Smoke Dataset" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 3 · Multimodal Smoke Chamber Research Dataset</strong>
                Paired thermal radiometry (top row) vs. severely obscured infrared/optical frames (bottom row) capturing critical survivor poses in heavy smoke.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- 05. Experimental Evaluation on Jetson Nano -->
      <section class="story-section" id="experiments">
        <div class="detail-wrap">
          <div class="story-split reverse">
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/Human_expertiment_result.jpg" alt="Experimental Detection Results in Heavy Smoke" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 4 · Real-Time Fused Detection Results in Heavy Smoke</strong>
                Quantitative detection bounding boxes (80%–90%+ confidence) localizing human victims across prone, crouching, and multi-person occluded configurations.
              </figcaption>
            </figure>
            <div>
              <div class="story-kicker">05 / Experimental Evaluation</div>
              <h2>Robust Detection Performance Across Zero-Visibility Scenarios.</h2>
              <p>Extensive quantitative and qualitative evaluations verified that the proposed cross-spectral fusion network reliably localizes human victims in heavy smoke environments where traditional visual approaches collapse:</p>
              <ul class="story-points">
                <li><strong>High Confidence Localization:</strong> Achieved <strong>80.0% – 90.2%</strong> detection confidence scores across challenging survival poses, including crawling and floor-level collapse.</li>
                <li><strong>Multi-Person Resolution:</strong> Successfully separates and identifies multiple proximate individuals standing shoulder-to-shoulder under dense smoke saturation.</li>
                <li><strong>Edge Deployability:</strong> Validated end-to-end on the NVIDIA Jetson Nano edge computer, confirming that life-saving AI can execute locally on search-and-rescue drone payloads.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 06. Scholarly Publication & IEEE Citations -->
      <section class="story-section shade" id="publication">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">06 / Scholarly Publication &amp; Citations</div>
            <h2>Peer-Reviewed IEEE Conference Publication.</h2>
            <p>This research was peer-reviewed, accepted, and published in the IEEE Xplore digital library following presentation at the 2023 International Conference on System Science and Engineering (ICSSE):</p>
          </div>

          <div class="pillar-card" style="border-left: 4px solid #168a90;">
            <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px; flex-wrap: wrap;">
              <span class="pub-badge-first">FIRST AUTHOR</span>
              <span class="pub-eyebrow">IEEE ICSSE 2023 · CONFERENCE PAPER</span>
            </div>
            <h3 style="font-size: 19px; line-height: 1.35; margin-bottom: 10px;">
              Efficient Infrared and Thermal Imaging Fusion Approach for Real-time Human Detection in Heavy Smoke Scenarios
            </h3>
            <p style="font-size: 14px; margin-bottom: 12px;">
              <strong>Authors:</strong> N.-N. Truong, T.-D. Do, L.-A. Tran, T.-D. Nguyen, M.-H. Le<br>
              <strong>Venue:</strong> 2023 International Conference on System Science and Engineering (ICSSE), Ho Chi Minh City, Vietnam<br>
              <strong>Publisher:</strong> IEEE Xplore &bull; DOI: 10.1109/ICSSE58759.2023.10227078
            </p>
            <div style="border-top: 1px solid #eef3f4; padding-top: 14px; display: flex; gap: 12px; flex-wrap: wrap;">
              <a class="story-btn-primary" href="https://ieeexplore.ieee.org/document/10227078" target="_blank" rel="noopener">
                View Paper on IEEE Xplore ↗
              </a>
              <a class="story-btn-outline" href="https://nhandoremon.github.io/TruongNgheNhan/project_human.html" target="_blank" rel="noopener">
                Original Academic Project Archive ↗
              </a>
              <a class="story-btn-outline" href="project.html?id=abnormal">
                Companion Project: CCTV Anomaly Detection →
              </a>
              <a class="story-btn-outline" href="index.html#academic">
                All Academic Work →
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }



  function renderVLAStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#timeline">Chronological Milestones ↓</a>
        <a class="detail-button secondary" href="#phase1">Phase 1: LeRobot Video ↓</a>
        <a class="detail-button secondary" href="#phase2">Phase 2: 6-DoF Cobot ↓</a>
        <a class="detail-button secondary" href="#phase3">Phase 3: Dual-Arm CES 2027 ↓</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- Corporate Confidentiality & Strategic Roadmap -->
      <section class="story-section" id="timeline">
        <div class="detail-wrap">
          <div class="industry-confidential-note" style="margin-bottom: 36px;">
            <strong>🔒 Corporate Confidentiality &amp; NDA Disclosure Notice</strong><br>
            This project encompasses proprietary industrial R&amp;D conducted at <strong>Yuil Robotics</strong> (South Korea). Due to strict enterprise intellectual property and non-disclosure agreements (NDA), raw industrial execution video feeds for commercial robot arms remain restricted. Only authorized still snapshots, public benchmark demonstrations (LeRobot), and high-level architectural methodologies are showcased.
          </div>

          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">01 / Strategic Industrial Roadmap</div>
            <h2>From Open-Source Foundations to Industrial Bimanual Manipulation.</h2>
            <p>Vision-Language-Action (VLA) models connect high-level multimodal semantics with low-level continuous motor control. At <strong>Yuil Robotics</strong>, this research bridges open-source algorithmic benchmarking with high-precision commercial robotics across three sequential industrial milestones:</p>
          </div>

          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Phase 1 · March 2026</span>
              <h3>LeRobot Foundation Policy</h3>
              <p>Benchmarked open-source VLA imitation learning on Hugging Face LeRobot. Mastered synchronized multi-camera observation pipelines and autonomous cube pick-and-place manipulation.</p>
              <div class="pillar-paper">
                <strong>Status &amp; Evidence</strong>
                Operational Video Demonstration Available
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Phase 2 · June 2026</span>
              <h3>6-DoF Cobot &amp; VR Teleoperation</h3>
              <p>Scaled to commercial Yuil 6-DoF collaborative robots. Deployed a Meta Quest VR teleoperation system for human trajectory capture, followed by autonomous fruit pick-and-place from table to box.</p>
              <div class="pillar-paper">
                <strong>Status &amp; Evidence</strong>
                Authorized Industrial Snapshots (Corporate NDA)
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Phase 3 · Sep 2026 – CES 2027</span>
              <h3>7-DoF Dual-Arm Coordination</h3>
              <p>Architected a humanoid-style 7-DoF dual-arm platform (14 DoF total) executing complex bimanual manipulation (toolbox lid retention and tray extraction), serving as Yuil Robotics flagship showcase for CES 2027.</p>
              <div class="pillar-paper">
                <strong>Status &amp; Evidence</strong>
                Flagship Platform for CES 2027
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Phase 1: LeRobot Foundation Benchmark -->
      <section class="story-section shade" id="phase1">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 24px;">
            <div class="story-kicker">02 / Phase 1: March 2026 · Foundation Benchmark</div>
            <h2>Policy Training &amp; Autonomous Rollout on LeRobot.</h2>
            <p>Hugging Face's <strong>LeRobot</strong> framework provides an open-source research baseline for physical AI and policy evaluation. In this initial phase, an end-to-end policy was trained on multi-camera demonstration episodes to master spatial cube grasping and target placement:</p>
          </div>

          <div class="detail-video-wrapper">
            <iframe src="https://www.youtube.com/embed/S3Ujdsisdck" title="Vision-Language-Action (VLA) on LeRobot - Cube Pick and Place" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p class="video-caption">Live Operational Demonstration: Vision-Language-Action policy training and physical rollout for autonomous cube pick-and-place using LeRobot.</p>

          <div class="story-points" style="margin-top: 24px;">
            <div>
              <strong>Multi-Camera Observation Synchronization:</strong>
              Synchronized overhead spatial views and wrist-mounted cameras to provide both global context and fine local grasping resolution.
            </div>
            <div style="margin-top: 10px;">
              <strong>Action Chunking Trajectory Smoothing:</strong>
              Predicts temporal action chunks rather than single-step actions, mitigating high-frequency latency and motor stutter to generate fluid physical trajectories.
            </div>
            <div style="margin-top: 10px;">
              <strong>Data Infrastructure Foundation:</strong>
              Established robust demonstration logging schemas, calibration routines, and evaluation metrics before scaling to heavy industrial robot arms.
            </div>
          </div>
        </div>
      </section>

      <!-- Phase 2: 6-DoF Industrial Cobot & VR Teleoperation -->
      <section class="story-section" id="phase2">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">03 / Phase 2: June 2026 · Industrial Cobot Deployment</div>
            <h2>VR Teleoperation Data Collection &amp; Autonomous Fruit Pick-and-Place.</h2>
            <p>Scaling from tabletop research rigs to commercial industrial manufacturing demands expert human demonstration data with fine compliance and adaptable trajectories. At Yuil Robotics, a high-fidelity <strong>VR Teleoperation</strong> infrastructure was engineered to train commercial 6-DoF collaborative robots:</p>
          </div>

          <div class="story-comparison-grid">
            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/vla/Teleoperation.png" alt="VR Teleoperation in Yuil Robotics lab" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 1 · VR Teleoperation Data Collection</strong>
                Nghe-Nhan Truong demonstrating spatial manipulation trajectories via Meta Quest VR controller on the white industrial Yuil Cobot with real-time multi-camera logging.
              </figcaption>
            </figure>

            <figure class="story-figure">
              <div class="img-box">
                <img src="assets/images/vla/Cobot.JPEG" alt="Autonomous 6-DoF Cobot Fruit Pick and Place" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 2 · Autonomous Fruit Pick &amp; Place Inference</strong>
                Autonomous rollout of the trained VLA policy grasping individual fruits (apples, lemons) and placing them neatly inside the labeled Yuil storage box.
              </figcaption>
            </figure>
          </div>

          <ul class="story-points" style="margin-top: 24px;">
            <li><strong>Intuitive Human-to-Robot Mapping:</strong> The 6-DoF spatial tracking controller translates human hand translation and orientation directly into robot end-effector coordinates at 60 Hz.</li>
            <li><strong>Multimodal Dataset Aggregation:</strong> Demonstrations record synchronized multi-view Intel RealSense RGB-D streams, joint proprioception, gripper status, and torque feedback.</li>
            <li><strong>Task Generalization:</strong> The fine-tuned policy reliably identifies target fruits and executes table-to-box packaging under variable object initial positions and lighting conditions.</li>
          </ul>
        </div>
      </section>

      <!-- Phase 3: 7-DoF Dual-Arm Bimanual System for CES 2027 -->
      <section class="story-section shade" id="phase3">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 24px;">
            <div class="story-kicker">04 / Phase 3: September 2026 – CES 2027 · Flagship Platform</div>
            <h2>7-DoF Dual-Arm Bimanual Coordination for CES 2027.</h2>
            <p>Human manipulative dexterity fundamentally relies on two hands working in concert. Bimanual coordination represents the frontier of Physical AI—requiring two arms to coordinate complementary actions, share asymmetric loads, and actively avoid self-collision within a shared workspace:</p>
          </div>

          <figure class="story-figure full-width">
            <div class="img-box">
              <img src="assets/images/vla/Dual Arm 7DoF.png" alt="7-DoF Dual-Arm Bimanual Manipulation Robot" loading="lazy">
            </div>
            <figcaption>
              <strong>Figure 3 · Flagship 7-DoF Dual-Arm Humanoid Platform for CES 2027</strong>
              Advanced dual-arm bimanual coordination executing simultaneous toolbox lid retention and inner compartmental tray extraction in the Yuil Robotics R&amp;D lab.
            </figcaption>
          </figure>

          <div class="story-pillars-grid" style="margin-top: 28px;">
            <div class="pillar-card">
              <span class="pillar-badge">Kinematic Space</span>
              <h3>14-DoF Coordination</h3>
              <p>Synchronizes joint action trajectories across two 7-DoF manipulators and articulated 5-finger hands, running real-time dynamic collision avoidance hulls.</p>
              <div class="pillar-paper">
                <strong>Safety &amp; Compliance</strong>
                Continuous self-collision prevention in shared workspaces
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Manipulation Logic</span>
              <h3>Asymmetric Bimanual Roles</h3>
              <p>One arm maintains a continuous physical constraint (firmly holding open the heavy toolbox lid), while the second arm executes precision fine-motor extraction of the inner organizer tray.</p>
              <div class="pillar-paper">
                <strong>Task Complexity</strong>
                Simultaneous constraint holding &amp; sub-millimeter extraction
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Visual Intelligence</span>
              <h3>Head &amp; Wrist Multimodal Perception</h3>
              <p>Fuses head-mounted Intel RealSense RGB-D perception on the articulated humanoid neck with wrist-mounted cameras for visual servoing during occluded grasps.</p>
              <div class="pillar-paper">
                <strong>Perception Architecture</strong>
                Active head gaze tracking + local eye-in-hand cameras
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Corporate Affiliation & Heritage -->
      <section class="story-section" id="affiliation">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">05 / Corporate Affiliation &amp; Engineering Heritage</div>
            <h2>Physical AI Engineering at Yuil Robotics.</h2>
            <p>This flagship project reflects Nghe-Nhan Truong's technical leadership as an AI Research Engineer &amp; Professional Manager (PM) at Yuil Robotics, shaping the corporate roadmap for Embodied Intelligence:</p>
          </div>

          <div class="story-comparison-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Enterprise Profile</span>
              <h3>Yuil Robotics Co., Ltd.</h3>
              <p>Leading industrial robotics manufacturer in South Korea specializing in collaborative robots, automation systems, and next-generation Physical AI solutions.</p>
              <div class="pillar-paper">
                <strong>Role &amp; Responsibility</strong>
                AI Research Engineer &bull; Professional Manager (PM)
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Global Showcase</span>
              <h3>CES 2027 · Las Vegas</h3>
              <p>The 7-DoF dual-arm bimanual platform represents Yuil Robotics flagship technological demonstration scheduled for international unveiling at the Consumer Electronics Show (CES 2027).</p>
              <div class="pillar-paper">
                <strong>Target Milestone</strong>
                International Flagship Showcase (January 2027)
              </div>
            </div>
          </div>

          <div style="margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; align-items: center;">
            <a class="story-btn-primary" href="https://www.youtube.com/watch?v=S3Ujdsisdck" target="_blank" rel="noopener">
              Watch LeRobot Demo on YouTube ↗
            </a>
            <a class="story-btn-outline" href="project.html?id=pose">
              Related: 3D Vision &amp; 6D Pose →
            </a>
            <a class="story-btn-outline" href="project.html?id=teleop">
              Related: VR Robot Teleoperation →
            </a>
            <a class="story-btn-outline" href="index.html#applied">
              All Applied R&amp;D Work →
            </a>
          </div>
        </div>
      </section>
    `;
  }



  // =========================================================================
  // Render 6D Pose Estimation & Robot Manipulation Story
  // =========================================================================
  function renderPoseStory(p) {
    const ctaSlot = document.querySelector('.detail-cta');
    if (ctaSlot) {
      ctaSlot.innerHTML = `
        <a class="detail-button" href="#roadmap">01 Industrial Pillars ↓</a>
        <a class="detail-button secondary" href="#benchmark">02 Benchmark & Acceleration ↓</a>
        <a class="detail-button secondary" href="#perception">03 Known vs Novel Pose ↓</a>
        <a class="detail-button secondary" href="#calibration">04 Vision Hand-Eye Calibration ↓</a>
        <a class="detail-button secondary" href="#applications">05 Robot Manipulations ↓</a>
        <a class="detail-button secondary" href="#affiliation">06 Yuil Robotics Legacy ↓</a>
      `;
    }

    const body = $('project-body');
    if (!body) return;

    body.innerHTML = `
      <!-- Corporate Confidentiality & Strategic Architecture -->
      <section class="story-section" id="roadmap">
        <div class="detail-wrap">
          <div class="industry-confidential-note" style="margin-bottom: 36px;">
            <strong>🔒 Corporate Confidentiality &amp; NDA Disclosure Notice</strong><br>
            This project encompasses proprietary industrial R&amp;D conducted at <strong>Yuil Robotics (유일로보틱스)</strong>, South Korea — the author's first industrial robotics employer, to which I remain deeply grateful. Due to strict enterprise intellectual property and non-disclosure agreements (NDA), raw industrial execution video feeds for commercial robot arms remain confidential. Only authorized perception benchmarks, algorithmic workflow diagrams, and laboratory validation snapshots are showcased.
          </div>

          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">01 / Industrial Strategic Architecture</div>
            <h2>Bridging 3D Vision to Real-Time Robot Manipulation.</h2>
            <p>At <strong>Yuil Robotics</strong>, deploying 6D object pose perception on physical industrial platforms requires solving three interconnected engineering challenges: real-time edge acceleration, closed-loop camera-robot alignment, and multi-DoF manipulation execution:</p>
          </div>

          <div class="story-pillars-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Pillar 1 · Perception</span>
              <h3>Accelerated 6D Pose Engine</h3>
              <p>Optimized FoundationPose with TensorRT, dual-mode Auto-Select (CAD vs. Zero-Shot), and zero-copy IPC achieving 30 FPS on RTX 5080 and 14 FPS on Jetson AGX Orin.</p>
              <div class="pillar-paper">
                <strong>Execution Speed</strong>
                30.0 FPS Workstation &bull; 14.0 FPS Edge
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Pillar 2 · Calibration</span>
              <h3>Autonomous Hand-Eye Calibration</h3>
              <p>Closed-loop active vision feedback dynamically searches the DFvision chessboard and generates online viewing poses, replacing 20–50 manual poses with ≤2mm translation accuracy.</p>
              <div class="pillar-paper">
                <strong>Certified Precision</strong>
                Translation &le; 2.0 mm &bull; Rotation &le; 0.7&deg;
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Pillar 3 · Execution</span>
              <h3>Physical Robot Deployments</h3>
              <p>Coupled real-time 6D pose observations to dual-arm mobile manipulation (AMR pick-and-place) and multi-finger in-hand cube re-orientation via Reinforcement Learning.</p>
              <div class="pillar-paper">
                <strong>Production Platforms</strong>
                Yuil AMR + Dual Arm &bull; ROBOTIS Hand (RL)
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 02: Hardware Optimization & Runtime Benchmark -->
      <section class="story-section shade" id="benchmark">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">02 / Engineering Optimization &amp; Edge Hardware</div>
            <h2>Overcoming Latency Bottlenecks for Real-Time Robot Servoing.</h2>
            <p>Baseline open-source 6D pose estimators suffer from high latency (~6.4 FPS) and GPU memory spikes, causing severe trajectory lag and tracking loss during fast manipulation. By compiling TensorRT FP16 execution engines and deploying zero-copy shared-memory IPC, we transformed FoundationPose into a deterministic 30 Hz perception backbone:</p>
          </div>

          <figure class="story-figure">
            <div class="img-box" style="padding: 16px;">
              <img src="assets/images/6D_Pose/6DPose_Contribution.png" alt="6D Pose Performance Benchmark: Open-source vs NVIDIA RTX 5080 and Jetson AGX Orin" loading="lazy">
            </div>
            <figcaption>
              <strong>Figure 1 · Runtime Benchmark &amp; IPC Deployment Pipeline</strong>
              Throughput evaluation demonstrating the leap from an unusable 6.4 FPS open-source baseline to 30.0 FPS on workstation and 14.0 FPS deterministic inference on embedded Jetson AGX Orin edge hardware with &lt;1.0 ms IPC latency.
            </figcaption>
          </figure>

          <div class="story-pillars-grid" style="margin-top: 28px;">
            <div class="pillar-card">
              <span class="pillar-badge">Platform · High-End</span>
              <h3>NVIDIA RTX 5080 Workstation</h3>
              <p>Achieves continuous 30.0 FPS (4.7× speedup over open-source baseline), delivering fluid 30 Hz SE(3) pose updates for high-speed continuous robotic grasping without pauses.</p>
              <div class="pillar-paper">
                <strong>Throughput Metric</strong>
                30.0 FPS &bull; Full 30 Hz Visual Servoing
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Platform · Embedded Edge</span>
              <h3>Jetson AGX Orin Onboard</h3>
              <p>Achieves 14.0 FPS deterministic onboard inference directly mounted within the AMR mobile base chassis, eliminating external tethering and Wi-Fi latency.</p>
              <div class="pillar-paper">
                <strong>Throughput Metric</strong>
                14.0 FPS &bull; Autonomous Mobile Base
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Middleware · Zero-Copy</span>
              <h3>Shared-Memory IPC &amp; ROS2</h3>
              <p>Transfers 6-DoF transformation matrices directly into the robot joint controller via shared memory ring-buffers, reducing communication latency to under 1.0 ms.</p>
              <div class="pillar-paper">
                <strong>Latency Metric</strong>
                &lt; 1.0 ms direct joint controller bridge
              </div>
            </div>
          </div>

          <ul class="story-points" style="margin-top: 24px;">
            <li><strong>Dynamic Auto-Select Architecture:</strong> Automatically detects workspace requirements — routing known parts to CAD wireframe tracking or novel items to interactive prompt segmentation.</li>
            <li><strong>FP16 TensorRT Graph Optimization:</strong> Layer-by-layer precision calibration reduces GPU memory footprint by 62% while preserving sub-millimeter 3D spatial fidelity.</li>
          </ul>
        </div>
      </section>

      <!-- Section 03: Core 6D Pose Perception: Known CAD vs Novel Objects -->
      <section class="story-section" id="perception">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">03 / Dual-Paradigm Perception</div>
            <h2>CAD-Based High Precision vs. Zero-Shot Novel Object Tracking.</h2>
            <p>Industrial manufacturing requires millimetric precision for registered CAD workpieces, alongside flexible model-free tracking for arbitrary warehouse SKUs. Both paradigms run in real time with continuous tracking:</p>
          </div>

          <div class="story-comparison-grid">
            <figure class="story-figure">
              <div class="video-box" style="position: relative; width: 100%; padding-top: 56.25%; background: #070e17; overflow: hidden; border-bottom: 1px solid #e5efef;">
                <video controls playsinline preload="metadata" poster="assets/images/6D_Pose/known_pose_preview.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #000;">
                  <source src="assets/images/6D_Pose/Known%206D%20Pose.webm" type="video/webm">
                  Your browser does not support the video tag.
                </video>
              </div>
              <figcaption>
                <strong>Video 1 · Known CAD-Based 6D Pose Tracking (33.8 FPS)</strong>
                FoundationPose registers the target object against its exact 3D CAD mesh, projecting wireframes and RGBXYZ Cartesian coordinate axes with sub-millimeter precision through severe hand occlusions.
              </figcaption>
            </figure>

            <figure class="story-figure">
              <div class="video-box" style="position: relative; width: 100%; padding-top: 56.25%; background: #070e17; overflow: hidden; border-bottom: 1px solid #e5efef;">
                <video controls playsinline preload="metadata" poster="assets/images/6D_Pose/novel_pose_preview.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #000;">
                  <source src="assets/images/6D_Pose/Novel%206D%20Pose%205.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
              <figcaption>
                <strong>Video 2 · Novel Object Zero-Shot 6D Pose Tracking</strong>
                Model-free generalization operating without prior CAD files or offline training. An interactive bounding prompt on the live RGB-D stream extracts and continuously tracks the 3D oriented bounding box.
              </figcaption>
            </figure>
          </div>

          <ul class="story-points" style="margin-top: 24px;">
            <li><strong>Robust Under Severe Occlusions:</strong> CAD-based tracker maintains tracking lock even when more than 70% of the workpiece surface is occluded by the operator's hands during dynamic motion.</li>
            <li><strong>Instant Warehouse Onboarding:</strong> Novel object tracking allows warehouse operators to onboard new inventory items in seconds without needing CAD files or retraining neural networks.</li>
          </ul>
        </div>
      </section>

      <!-- Section 04: Breakthrough: Autonomous Vision-Feedback Hand-Eye Calibration -->
      <section class="story-section shade" id="calibration">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">04 / Breakthrough Algorithmic Innovation</div>
            <h2>Autonomous Vision-Feedback Hand-Eye Calibration.</h2>
            <p>Traditional industrial calibration requires manual teaching of 20–50 static poses, taking hours and breaking whenever camera mounts shift. We developed a fully autonomous closed-loop system using active visual feedback to search, capture, and compute hand-eye calibration with industrial precision:</p>
          </div>

          <div class="story-comparison-grid">
            <figure class="story-figure">
              <div class="img-box" style="padding: 16px;">
                <img src="assets/images/6D_Pose/Calibration_Idea_overview.png" alt="Hand-Eye Calibration Architecture: Old Offline Workflow vs New Online Autonomous Workflow" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 2 · Architectural Workflow Comparison</strong>
                <strong>Old Workflow (Offline):</strong> Manual pose teaching &rarr; 20–50 recorded poses &rarr; blind replay &rarr; fragile to any mechanical shift.<br>
                <strong>New Workflow (Online):</strong> 1. Find target &rarr; 2. Reference pose &rarr; 3. Generate poses online using visual feedback &rarr; 4. Capture automatically &rarr; 5. Calibrate.
              </figcaption>
            </figure>

            <figure class="story-figure">
              <div class="img-box" style="padding: 16px;">
                <img src="assets/images/6D_Pose/Calibration%20Progress.png" alt="Robot Wrist Holding Precision DFvision Chessboard Target" loading="lazy">
              </div>
              <figcaption>
                <strong>Figure 3 · Physical Calibration in Yuil Lab</strong>
                Precision DFvision target (<code>DFvision 012-290-20</code>) held by the robot arm end-effector, executing multi-angle viewing sweeps coordinated dynamically by visual feedback.
              </figcaption>
            </figure>
          </div>

          <div class="story-pillars-grid" style="margin-top: 28px;">
            <div class="pillar-card">
              <span class="pillar-badge">Spatial Precision</span>
              <h3>Translation Error &le; 2.0 mm</h3>
              <p>Delivers industrial-grade sub-2mm Euclidean translation accuracy verified across the entire robot work volume, eliminating grasp trajectory offsets.</p>
              <div class="pillar-paper">
                <strong>Verified Accuracy</strong>
                Euclidean distance error &le; 2.0 mm
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Angular Precision</span>
              <h3>Rotation Error &le; 0.7&deg;</h3>
              <p>High angular precision ensures parallel-jaw grippers and suction cups mate perfectly with workpiece surfaces without rotational misalignment.</p>
              <div class="pillar-paper">
                <strong>Verified Accuracy</strong>
                Spatial angular error &le; 0.7 degrees
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Operational Efficiency</span>
              <h3>100% Autonomous Routine</h3>
              <p>Zero manual waypoint teaching. Re-calibration after camera shifts or maintenance completes automatically in minutes with a single button press.</p>
              <div class="pillar-paper">
                <strong>Setup Overhead</strong>
                Reduced from 2 hours manual to 3 minutes auto
              </div>
            </div>
          </div>

          <ul class="story-points" style="margin-top: 24px;">
            <li><strong>Active Closed-Loop Target Search:</strong> Robot uses live camera feedback to locate the chessboard and establish a robust reference frame before generating exploratory viewpoints.</li>
            <li><strong>Dynamic Online Viewpoint Generation:</strong> Calculates a uniform spherical distribution of camera angles centered on the target, guaranteeing well-conditioned mathematical solvability.</li>
            <li><strong>Synchronous Data Acquisition:</strong> Robot end-effector pose and camera image frames are captured simultaneously with sub-millisecond synchronization.</li>
          </ul>
        </div>
      </section>

      <!-- Section 05: Physical Deployments — Mobile Manipulation & In-Hand RL -->
      <section class="story-section" id="applications">
        <div class="detail-wrap">
          <div style="max-width: 860px; margin-bottom: 28px;">
            <div class="story-kicker">05 / Physical Deployments</div>
            <h2>From Mobile AMR Palletizing to Dexterous In-Hand Manipulation.</h2>
            <p>Real-time 6D pose estimation powers two demanding industrial robotic setups at Yuil Robotics, combining mobile navigation with fine multi-finger motor control:</p>
          </div>

          <!-- Application A: Mobile Manipulation -->
          <div style="margin-bottom: 40px;">
            <div style="margin-bottom: 16px;">
              <span class="pillar-badge" style="font-size: 11px;">Deployment Case A</span>
              <h3 style="font-size: 18px; margin: 8px 0 6px; color: var(--ink);">AMR Mobile Manipulation: Dual-Arm Pick &amp; Place</h3>
              <p style="font-size: 14px; color: var(--muted); margin: 0;">Autonomous mobile navigation coupled with dual-arm trajectory planning to grasp goods on tables and deposit them into shipping cartons.</p>
            </div>

            <div class="story-comparison-grid">
              <figure class="story-figure">
                <div class="img-box">
                  <img src="assets/images/6D_Pose/6D_Pose_Application_Pick_Place_1.png" alt="AMR Dual Arm Robot estimating 6D pose of Pringles container on table" loading="lazy">
                </div>
                <figcaption>
                  <strong>Figure 4 · 6D Pose Detection &amp; Grasping on Table</strong>
                  The mobile dual-arm platform docks at the workstation, locks onto the cylindrical target workpiece (Pringles can) using 6D pose tracking, and computes collision-free grasp trajectories.
                </figcaption>
              </figure>

              <figure class="story-figure">
                <div class="img-box">
                  <img src="assets/images/6D_Pose/6D_Pose_Application_Pick_Place_2.png" alt="AMR moving to target location and placing product into Yuil box" loading="lazy">
                </div>
                <figcaption>
                  <strong>Figure 5 · Autonomous Transit &amp; Box Deposit</strong>
                  The AMR navigates across the facility while securely holding the product, locates the Yuil Robotics shipping carton, and deposits the workpiece precisely inside.
                </figcaption>
              </figure>
            </div>
          </div>

          <!-- Application B: In-Hand Cube Manipulation -->
          <div>
            <div style="margin-bottom: 16px;">
              <span class="pillar-badge" style="font-size: 11px;">Deployment Case B</span>
              <h3 style="font-size: 18px; margin: 8px 0 6px; color: var(--ink);">Bimanual Handover &amp; In-Hand Cube Re-Orientation via Reinforcement Learning</h3>
              <p style="font-size: 14px; color: var(--muted); margin: 0;">A coordinated two-stage manipulation pipeline: An industrial robot arm utilizes 6D pose estimation to pick the cube and transfer it onto the ROBOTIS multi-finger hand, followed by a closed-loop Reinforcement Learning policy driving finger joints to rotate the cube to the designated face.</p>
            </div>

            <div class="story-comparison-grid">
              <figure class="story-figure">
                <div class="img-box">
                  <img src="assets/images/6D_Pose/6D_Pose_Application_Cube_handle_1.png" alt="Robot arm picking cube and transferring it onto the ROBOTIS multi-finger hand" loading="lazy">
                </div>
                <figcaption>
                  <strong>Figure 6 · 6D Pose Pick &amp; Handover to Dexterous Hand</strong>
                  The robotic manipulator identifies the 6D pose of the cube on the table, grasps it cleanly, and executes a precise inter-arm handover, placing the cube directly into the open palm of the ROBOTIS multi-finger hand.
                </figcaption>
              </figure>

              <figure class="story-figure">
                <div class="img-box">
                  <img src="assets/images/6D_Pose/6D_Pose_Application_Cube_handle_2.png" alt="ROBOTIS multi-finger hand rotating the cube to match the target face via RL" loading="lazy">
                </div>
                <figcaption>
                  <strong>Figure 7 · In-Hand Dexterous Rotation (Reinforcement Learning)</strong>
                  With real-time 6D pose serving as continuous spatial feedback, the trained Reinforcement Learning policy actuates multi-finger joints in coordination, dexterously rolling and rotating the cube until the user-specified target face is oriented upwards.
                </figcaption>
              </figure>
            </div>
          </div>

          <ul class="story-points" style="margin-top: 28px;">
            <li><strong>Bimanual Handover Coordination:</strong> The robot arm uses live 6D pose tracking to pick the cube and position it accurately within the grasp envelope of the dexterous hand without collision.</li>
            <li><strong>Closed-Loop RL Rotation Policy:</strong> The policy maps continuous 6D pose state observations [R | t] directly into articulated finger torque/position targets to achieve the specified cube face orientation.</li>
          </ul>
        </div>
      </section>

      <!-- Section 06: Corporate Heritage & Yuil Robotics Tribute -->
      <section class="story-section shade" id="affiliation">
        <div class="detail-wrap">
          <div style="max-width: 820px; margin-bottom: 24px;">
            <div class="story-kicker">06 / Corporate Affiliation &amp; Engineering Heritage</div>
            <h2>Applied Robotics Engineering at Yuil Robotics.</h2>
            <p>This work reflects Nghe-Nhan Truong's contributions as an AI Research Engineer &amp; Professional Manager (PM) at Yuil Robotics, South Korea:</p>
          </div>

          <div class="story-comparison-grid">
            <div class="pillar-card">
              <span class="pillar-badge">Enterprise Profile</span>
              <h3>Yuil Robotics Co., Ltd. (유일로보틱스)</h3>
              <p>Premier South Korean industrial robotics company specializing in smart factory automation, industrial articulated robots, collaborative robots (Cobots), and Autonomous Mobile Robots (AMR).</p>
              <div class="pillar-paper">
                <strong>First Industrial Workplace</strong>
                Deep gratitude to Yuil leadership, mentors, and engineering colleagues
              </div>
            </div>

            <div class="pillar-card">
              <span class="pillar-badge">Applied R&amp;D Mission</span>
              <h3>Production-Ready Physical AI</h3>
              <p>Transforming cutting-edge 3D computer vision and deep learning into reliable, sub-millimeter robotic systems that withstand the demands of industrial factory automation.</p>
              <div class="pillar-paper">
                <strong>Engineering Philosophy</strong>
                Algorithms matter when they breathe life into physical machines
              </div>
            </div>
          </div>

          <div style="margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; align-items: center;">
            <a class="story-btn-primary" href="project.html?id=vla">
              Next Applied R&amp;D: VLA Robotics →
            </a>
            <a class="story-btn-outline" href="index.html#applied">
              All Applied R&amp;D Work →
            </a>
            <a class="story-btn-outline" href="index.html#academic">
              Explore Academic Research →
            </a>
          </div>
        </div>
      </section>
    `;
  }


    function renderDefaultProject(p) {
    // 2. Overview Section
    $('overview-text').textContent = p.overview;
    $('disclosure-note').textContent = p.disclosure || (p.group === 'Academic Research' ? 'Academic Project' : 'Industry R&D');

    // 3. Contributions Section
    const contribList = $('contribution-list');
    contribList.innerHTML = p.contributions.map(c => `<div class="contribution-item">${c}</div>`).join('');

    // 4. Technical Aspects Section
    const aspectList = $('aspect-list');
    if (p.aspects && p.aspects.length) {
      aspectList.innerHTML = p.aspects.map((a, i) => `
        <details class="aspect-item" ${i === 0 ? 'open' : ''}>
          <summary>${String(i + 1).padStart(2, '0')} · ${a[0]}</summary>
          <div class="aspect-content">
            <p>${a[1]}</p>
          </div>
        </details>
      `).join('');
    } else {
      $('aspects').style.display = 'none';
    }

    // 5. Demonstrations & Evidence Section (Adaptive Rendering)
    $('result-intro').textContent = p.result;

    // Video rendering
    const videoSlot = $('video-slot');
    if (p.video) {
      videoSlot.innerHTML = `
        <div class="detail-video-wrapper">
          <iframe src="${p.video}" title="${p.title} Demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        ${p.videoCaption ? `<p class="video-caption">${p.videoCaption}</p>` : ''}
      `;
      videoSlot.style.display = 'block';
    } else if (p.videos && p.videos.length) {
      videoSlot.innerHTML = `
        <div class="detail-video-grid">
          ${p.videos.map(v => `
            <div class="video-card">
              <video controls preload="metadata">
                <source src="${v.src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="video-card-body">
                <h4>${v.title}</h4>
                <p>${v.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      videoSlot.style.display = 'block';
    } else {
      videoSlot.style.display = 'none';
    }

    // Gallery rendering
    const gallerySlot = $('gallery-slot');
    if (p.gallery && p.gallery.length) {
      gallerySlot.innerHTML = p.gallery.map(g => `
        <figure class="gallery-card">
          <div class="gallery-card-img-wrap">
            <img src="${g.src}" alt="${g.title}" loading="lazy">
          </div>
          <figcaption>
            <strong>${g.title}</strong>
            ${g.desc}
          </figcaption>
        </figure>
      `).join('');
      gallerySlot.style.display = 'grid';
    } else {
      gallerySlot.style.display = 'none';
    }

    // If no video and no gallery
    if (!p.video && (!p.videos || !p.videos.length) && (!p.gallery || !p.gallery.length)) {
      if (p.group === 'Applied R&D') {
        gallerySlot.innerHTML = `
          <div class="industry-confidential-note">
            🔒 <strong>Confidential Industry Track</strong>: Physical rollout benchmarks and proprietary datasets are safeguarded per company intellectual property guidelines.
          </div>
        `;
        gallerySlot.style.display = 'block';
      }
    }

    // 6. Resources & Publications Section
    const resList = $('resource-list');
    if (p.resources && p.resources.length) {
      resList.innerHTML = p.resources.map(([name, url]) => `
        <a href="${url}" ${url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${name}</a>
      `).join('');
    } else {
      resList.innerHTML = '<div class="pending">Technical artifacts and verified records will be published when released.</div>';
    }
  }

  // Branch rendering:
  if (cleanKey === 'facial') {
    renderFacialStory(p);
  } else if (cleanKey === 'signvn' || cleanKey === 'sign-web') {
    renderSignVNStory(p);
  } else if (cleanKey === 'sign-arm' || cleanKey === 'sign' || cleanKey === 'handsign') {
    renderSignArmStory(p);
  } else if (cleanKey === 'abnormal' || cleanKey === 'cctv') {
    renderAbnormalStory(p);
  } else if (cleanKey === 'smoke' || cleanKey === 'human' || cleanKey === 'thermal') {
    renderSmokeStory(p);
  } else if (cleanKey === 'vla' || cleanKey === 'robotics' || cleanKey === 'lerobot') {
    renderVLAStory(p);
  } else if (cleanKey === 'pose' || cleanKey === '6d-pose' || cleanKey === 'vision') {
    renderPoseStory(p);
  } else {
    renderDefaultProject(p);
  }

})();