import { defineStore } from "pinia";

export const useGlassesStore = defineStore("glassesStore", {
  state: () => ({
    optionSteps: {
      single_vision_options: [{}],
      progressives_options: [
        {
          id: "standard",
          label: "Standard Progressives",
          description: "Affordable and effective.",
          image: "/progressives_lenses_standard.svg",
        },
        {
          id: "premium",
          label: "Enhanced Progressives",
          description: "Sharper and wider view.",
          image: "/progressives_lenses_standard.svg",
        },
      ],
      readers_options: [
        {
          id: "standard",
          label: "Standard Readers",
          description: "Affordable and effective.",
          image: "/standard.svg",
        },
        {
          id: "premium",
          label: "Premium Readers",
          description: "Sharper and wider view.",
          image: "/premium.svg",
        },
      ],
      non_prescription_options: [
        {
          id: "clear",
          label: "Clear",
          description: "Transparent lenses for everyday use.",
          image: "/Classic.svg",
        },
        {
          id: "light_transitioning",
          label: "Light Transitioning",
          description:
            "Lenses that adapt to changing light conditions, offering UV protection and glare reduction.",
          image: "/Light-adaptiveve-Light.svg",
        },
        {
          id: "blue_light_blocking",
          label: "Blue Light Blocking",
          description:
            "Fillters out blue light emitted by digital screens, LED lights, and sunlight and reduces eye strain, fatigue from blue light.",
          image: "/Blue-Light.svg",
        },
        {
          id: "polarized_sun",
          label: "Polarized Sun",
          description:
            "Reduce glare, improve visual clarity, and enhance color perception.",
          image: "/Polarized-grey.svg",
        },
      ],
    },
    titles: {
      initial: "Choose the type of glasses that you would like",
      single_vision_options: "Enter your pupilary distance",
      progressives_options: "What type of progressives do you want?",
      readers_options: "Enter your pupilary distance",
      non_prescription_options: "Choose your lens options",
    },
    pds: [
      { id: "pd_60.0", name: "60.0" },
      { id: "pd_60.5", name: "60.5" },
      { id: "pd_61.0", name: "61.0" },
      { id: "pd_61.5", name: "61.5" },
      { id: "pd_62.0", name: "62.0" },
      { id: "pd_62.5", name: "62.5" },
    ],
    sphOD: [...Array(6)].map((_, i) => ({
      id: `sphOD_${i + 1}`,
      name: `${i + 1}`,
    })),
    sphOS: [...Array(6)].map((_, i) => ({
      id: `sphOS_${i + 1}`,
      name: `${i + 1}`,
    })),
    cylOD: [...Array(6)].map((_, i) => ({
      id: `cylOD_${i + 1}`,
      name: `${i + 1}`,
    })),
    cylOS: [...Array(6)].map((_, i) => ({
      id: `cylOS_${i + 1}`,
      name: `${i + 1}`,
    })),
    axisOD: [...Array(6)].map((_, i) => ({
      id: `axisOD_${i + 1}`,
      name: `${i + 1}`,
    })),
    axisOS: [...Array(6)].map((_, i) => ({
      id: `axisOS_${i + 1}`,
      name: `${i + 1}`,
    })),
    finalSelections: null,
    selectedPds: null,
    selectedSphOD: null,
    selectedSphOS: null,
    selectedCylOD: null,
    selectedCylOS: null,
    selectedAxisOD: null,
    selectedAxisOS: null,
    selectedOptions: [],
    currentTitle: "Choose the type of glasses that you would like",
    currentOptions: [
      {
        id: "single_vision",
        label: "Single Vision",
        description:
          "Corrects for one field of vision (near, intermediate, or far).",
        image: "/clear_lenses.svg",
        next: "single_vision_options",
      },
      {
        id: "progressives",
        label: "Progressives",
        description: "Corrects near, intermediate, and far vision in one lens.",
        image: "/progressives_lenses_standard.svg",
        next: "progressives_options",
      },
      {
        id: "Readers",
        label: "Readers",
        description: "Offers simple magnification for reading.",
        image: "/reading_lenses.svg",
        next: "readers_options",
      },
      {
        id: "Non-Prescription",
        label: "Non-Prescription",
        description: "Lens with no vision correction",
        image: "/Classic.svg",
        next: "non_prescription_options",
      },
    ],
    history: [],
    titleHistory: [],
    visible: false,
  }),
  actions: {
    saveSelections() {
      this.finalSelections = {
        pd: this.selectedPds || { name: "0" },
        sphOD: this.selectedSphOD || { name: "0" },
        sphOS: this.selectedSphOS || { name: "0" },
        cylOD: this.selectedCylOD || { name: "0" },
        cylOS: this.selectedCylOS || { name: "0" },
        axisOD: this.selectedAxisOD || { name: "0" },
        axisOS: this.selectedAxisOS || { name: "0" },
        selectedLens: this.selectedOptions,
      };
    },
    resetSelections() {
      this.selectedOptions = [];
      this.selectedPds = null;
      this.selectedSphOD = null;
      this.selectedSphOS = null;
      this.selectedCylOD = null;
      this.selectedCylOS = null;
      this.selectedAxisOD = null;
      this.selectedAxisOS = null;
      this.finalSelections = null;
      this.currentTitle = "Choose the type of glasses that you would like";
      this.currentOptions = [
        {
          id: "single_vision",
          label: "Single Vision",
          description:
            "Corrects for one field of vision (near, intermediate, or far).",
          image: "/clear_lenses.svg",
          next: "single_vision_options",
        },
        {
          id: "progressives",
          label: "Progressives",
          description:
            "Corrects near, intermediate, and far vision in one lens.",
          image: "/progressives_lenses_standard.svg",
          next: "progressives_options",
        },
        {
          id: "Readers",
          label: "Readers",
          description: "Offers simple magnification for reading.",
          image: "/reading_lenses.svg",
          next: "readers_options",
        },
        {
          id: "Non-Prescription",
          label: "Non-Prescription",
          description: "Lens with no vision correction",
          image: "/Classic.svg",
          next: "non_prescription_options",
        },
      ];
    },
    setFinalPageOptions() {
      this.currentTitle = "Summary";
      this.currentOptions = [];
    },
    confirmSave() {
      console.log("Selections saved:", this.finalSelections);
      this.visible = false;
    },
    cancelSelections() {
      this.resetSelections();
      this.visible = false;
    },
    setSphOD(value) {
      this.selectedSphOD = value;
    },
    setSphOS(value) {
      this.selectedSphOS = value;
    },
    setCylOD(value) {
      this.selectedCylOD = value;
    },
    setCylOS(value) {
      this.selectedCylOS = value;
    },
    setAxisOD(value) {
      this.selectedAxisOD = value;
    },
    setAxisOS(value) {
      this.selectedAxisOS = value;
    },
    setPd(value) {
      this.selectedPds = value;
    },
    setOptions(options) {
      this.history.push([...this.currentOptions]);
      this.currentOptions = options;
    },
    setTitle(title) {
      this.titleHistory.push(this.currentTitle);
      this.currentTitle = title;
    },
    addOption(option) {
      this.selectedOptions.push(option);
    },
    goBack() {
      if (this.history.length) {
        this.currentOptions = this.history.pop();
        this.currentTitle = this.titleHistory.pop();
        this.selectedOptions = this.selectedOptions.slice(0, -1);
      } else {
        this.visible = false;
      }
    },
  },
});
