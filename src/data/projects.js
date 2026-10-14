export const research = [
  {
    title: "Motorcycle-Aware Collision Warning",
    type: "MS thesis project",
    role: "Joint work with Rashid Liaquat",
    status: "In progress",
    summary: "Detection and tracking of motorcycles and rickshaws in dense traffic, with a collision warning layer on top.",
    tags: ["Object Detection", "Tracking", "Road Safety"],
    flow: [
      { title: "Record", note: "Road video from a stabilized camera" },
      { title: "Annotate", note: "Boxes on motorcycles and rickshaws" },
      { title: "Detect", note: "A detector finds them in each frame" },
      { title: "Track", note: "Each vehicle keeps its identity across frames" },
      { title: "Estimate", note: "Time to collision from distance and speed" },
      { title: "Warn", note: "Alert when the time falls below a safe limit" },
    ],
    path: [
      { stage: "My MS thesis", state: "In progress", text: "Annotated road video, detection and tracking of motorcycles and rickshaws, and time-to-collision estimation." },
      { stage: "Research paper", state: "Planned", text: "A paper by Umer Farooq (first author) and Rashid Liaquat (second author) on motorcycle-aware collision warning in dense, mixed traffic, with results on locally collected data." },
      { stage: "Joint product", state: "Planned", text: "A collision warning aid for riders and drivers that works in mixed traffic like Pakistan's." },
    ],
    details: [
      { label: "Problem", text: "Motorcycles and rickshaws weave through dense traffic and are often missed by systems built for cars and lanes." },
      { label: "Approach", text: "Supervised detection and tracking of motorcycles and rickshaws, then estimation of time to collision to trigger a warning before a risky situation develops." },
      { label: "Data", text: "Road video from a phone camera, annotated manually with bounding boxes. A gimbal is used to keep footage stable." },
      { label: "Status", text: "In progress. No results are claimed yet." },
    ],
    link: "",
  },
  {
    title: "Self-Supervised Speed Breaker & Pothole Anticipation",
    type: "Joint project",
    role: "Rashid Liaquat's MS thesis",
    status: "In progress",
    summary: "Predicts unmarked speed breakers and potholes before impact using a phone's camera, GPS and motion sensors. Training labels come from the vehicle's own response to the road, so no manual labeling is needed.",
    tags: ["Computer Vision", "Self-Supervised Learning", "Sensor Fusion"],
    flow: [
      { title: "Record", note: "Phone camera, GPS and IMU on a rigid mount" },
      { title: "Detect the event", note: "GPS speed dip plus accelerometer spike; gyroscope confirms" },
      { title: "Label", note: "The vehicle's response marks the bump or pothole" },
      { title: "Extract frames", note: "Video from 2 to 3 seconds before the event" },
      { title: "Train", note: "A lean vision model learns what the road looks like before a hit" },
      { title: "Anticipate", note: "Warn before impact and add the spot to a hazard map" },
    ],
    path: [
      { stage: "Rashid's MS thesis", state: "In progress", text: "Data collection with a rigidly mounted phone, sensor calibration, self-labeling pipeline, and the vision model." },
      { stage: "Research paper", state: "Planned", text: "A paper by Rashid Liaquat (first author) and Umer Farooq (second author) on self-supervised road-hazard anticipation using vehicle response as the label, aimed at a computer vision or intelligent transport venue." },
      { stage: "Joint product", state: "Planned", text: "A rider or fleet safety device: a small sensor unit with a GPS hazard map that warns before known bumps, built on the thesis models." },
    ],
    details: [
      { label: "Problem", text: "Many speed breakers and potholes on Pakistani roads are unmarked and unmapped, so drivers and navigation apps cannot see them coming." },
      { label: "Approach", text: "The vehicle's own response is used as the label. A dip in GPS speed together with a spike in the accelerometer marks a road event, and the gyroscope confirms it. Video frames from 2 to 3 seconds before the event are then extracted and used to train a lean vision model that recognises the road ahead." },
      { label: "Data", text: "A phone fixed rigidly to the vehicle records camera video, GPS and IMU readings (accelerometer and gyroscope). A rigid mount is required, because a gimbal would remove the vibration signal the labels depend on." },
      { label: "Why it matters", text: "No manual labeling is needed, and the model learns from local road conditions instead of foreign datasets." },
      { label: "Status", text: "Data collection and sensor calibration are the next steps. No results are claimed yet." },
    ],
    link: "",
  },
];

export const projects = [
  {
    title: "Plant Disease Classification with Vision Transformer",
    type: "Project",
    role: "Joint work with Rashid Liaquat",
    status: "Completed",
    summary: "Classifies leaf images into 38 classes from the PlantVillage dataset using a Vision Transformer with transfer learning in PyTorch and Hugging Face Transformers.",
    tags: ["Vision Transformer", "Transfer Learning", "PyTorch"],
    image: { src: "/img/agri.jpg", alt: "Eight sample leaf images from PlantVillage, each labeled with its plant and disease class", caption: "Sample leaves from PlantVillage, with class labels." },
    metrics: { validation: "92.27%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/main/Agri.ipynb",
  },
  {
    title: "Goat Health Classification (CRNN from Scratch)",
    type: "Project",
    role: "Joint work with Rashid Liaquat",
    status: "Completed",
    summary: "Separates healthy from unhealthy goats using a CNN + LSTM (CRNN) model built from scratch in PyTorch, trained on 742 images and tested on 186.",
    tags: ["CNN", "RNN", "PyTorch"],
    image: { src: "/img/goat_curves.png", alt: "Line charts of training loss falling and training accuracy rising over 5 epochs, with the test accuracy shown as a dashed line", caption: "Training loss and accuracy over 5 epochs, with the final test accuracy." },
    metrics: { epochs: 5, train: "93.06%", test: "96.65%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/Animal_CRNN/Animal.ipynb",
  },
  {
    title: "Fruit and Vegetable Classification with CNN",
    type: "Project",
    role: "Joint work with Rashid Liaquat",
    status: "Completed",
    summary: "Classifies 240 fruit and vegetable classes from the Fruits-360 dataset (100x100 images) with a CNN in PyTorch.",
    tags: ["CNN", "PyTorch", "Image Classification"],
    image: { src: "/img/fruits.jpg", alt: "Three sample fruit images from Fruits-360 on white backgrounds", caption: "Sample images from Fruits-360." },
    metrics: { epochs: 5, train: "80.51%", test: "95.05%" },
    link: "https://github.com/HRashidLiaquat/lessons-learned/blob/main/Fruits.ipynb",
  },
  {
    title: "NutriSelect",
    type: "Mobile app",
    role: "",
    status: "Completed",
    summary: "A Flutter app that helps users find and explore nutritious products, built with Firebase.",
    tags: ["Flutter", "Firebase", "Mobile development"],
    link: "https://github.com/Umer45-stack/NutriSelect",
  },
];

export const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umer-farooq-b71a95300/" },
  { label: "GitHub", href: "https://github.com/Umer45-stack" },
  { label: "Joint repository", href: "https://github.com/HRashidLiaquat/lessons-learned" },
];

export const profile = {
  cvUrl: "", // put "/cv.pdf" here after adding public/cv.pdf
  photoUrl: "/photo.jpg",
  email: "",
  phone: "",
  phoneShown: "",
};


export const skills = [
  { group: "Deep learning", items: ["PyTorch", "CNN", "CRNN", "Vision Transformer", "Image classification"] },
  { group: "Road-safety vision", items: ["Object detection", "Multi-object tracking", "Time-to-collision estimation"] },
  { group: "Mobile", items: ["Flutter", "Firebase"] },
  { group: "Tools", items: ["Python", "Jupyter and Colab", "Git and GitHub"] },
  { group: "Currently learning", items: ["Embedded AI", "Model deployment on small devices"] },
];

export const education = [
  { what: "MS Artificial Intelligence", where: "Superior University, Lahore", note: "Started in Fall 2025.", supervisor: { name: "Dr. Arfan Jaffar", role: "Professor, Superior University", url: "https://www.linkedin.com/in/arfan-jaffar-07277b1a/" }, cosupervisor: { name: "Talha Nadeem", role: "PhD in AI, AHOY", url: "https://www.linkedin.com/in/talhanadeem496/" } },
];


export const help = [
  { title: "Research collaboration", text: "Joining a research team on computer vision, detection and tracking, or road safety, from literature review and experiments to co-authoring papers." },
  { title: "Image classification prototypes", text: "Building and evaluating CNN, CRNN and Vision Transformer classifiers in PyTorch." },
  { title: "Mobile apps", text: "Building Flutter apps with a Firebase backend." },
];


export const embedded = {
  lead: "My next focus is embedded AI: models that run on small, low-power hardware right on the vehicle, without needing the internet.",
  why: "A collision warning is only useful if it arrives in time. Sending video to a server is too slow for a rider on a bike, so the model has to live on the device.",
  thesis: "My thesis, motorcycle-aware collision warning, is built around this. The plan is to detect and track motorcycles and rickshaws, estimate time to collision, and move a lean model onto small hardware with a short warning to the rider.",
  steps: [
    { title: "Camera", note: "Road video, stabilized" },
    { title: "Detect and track", note: "Motorcycles and rickshaws" },
    { title: "Lean model", note: "Small enough for the device" },
    { title: "Warning", note: "Alert when time to collision is short" },
  ],
  state: "Planned. Data collection and annotation come first; hardware choices follow what the data shows.",
};
