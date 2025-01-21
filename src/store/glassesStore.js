import { defineStore } from "pinia";

export const useGlassesStore = defineStore("glassesStore", {
  state: () => ({
    optionSteps: {
      single_vision_options: [
        {
          id: "uv_protection",
          label: "UV Protection",
          description: "Blocks harmful UV rays.",
          image: "/uv_protection.svg",
        },
        {
          id: "blue_light",
          label: "Blue Light Filter",
          description: "Reduces blue light strain.",
          image: "/blue_light_filter.svg",
        },
      ],
      progressives_options: [
        {
          id: "standard",
          label: "Standard Progressives",
          description: "Affordable and effective.",
          image: "/standard.svg",
        },
        {
          id: "premium",
          label: "Premium Progressives",
          description: "Sharper and wider view.",
          image: "/premium.svg",
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
          id: "standard",
          label: "Standard Lens",
          description: "Affordable and effective.",
          image: "/standard.svg",
        },
        {
          id: "premium",
          label: "Premium Lens",
          description: "Sharper and wider view.",
          image: "/premium.svg",
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
    sphOD: [...Array(6)].map((_, i) => ({ id: `sphOD_${i + 1}`, name: `${i + 1}` })),
    sphOS: [...Array(6)].map((_, i) => ({ id: `sphOS_${i + 1}`, name: `${i + 1}` })),
    cylOD: [...Array(6)].map((_, i) => ({ id: `cylOD_${i + 1}`, name: `${i + 1}` })),
    cylOS: [...Array(6)].map((_, i) => ({ id: `cylOS_${i + 1}`, name: `${i + 1}` })),
    axisOD: [...Array(6)].map((_, i) => ({ id: `axisOD_${i + 1}`, name: `${i + 1}` })),
    axisOS: [...Array(6)].map((_, i) => ({ id: `axisOS_${i + 1}`, name: `${i + 1}` })),
    selectedOptions: [],
    currentTitle: "Choose the type of glasses that you would like",
    currentOptions: [
      {
        id: "single_vision",
        label: "Single Vision",
        description: "Corrects for one field of vision (near, intermediate, or far).",
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
      } else {
        this.visible = false;
      }
    },
  },
});
