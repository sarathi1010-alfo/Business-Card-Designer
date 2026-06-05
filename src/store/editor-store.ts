import { create } from 'zustand';
import { CanvasElement, Template } from '@/types/editor';

interface EditorState {
  template: Template | null;
  elements: CanvasElement[];
  selectedElementId: string | null;
  history: CanvasElement[][];
  historyIndex: number;

  // Actions
  loadTemplate: (template: Template) => void;
  selectElement: (id: string | null) => void;
  updateElement: (id: string, updates: Partial<CanvasElement>) => void;
  addElement: (element: CanvasElement) => void;
  removeElement: (id: string) => void;
  updateBackgroundColor: (color: string) => void;

  // History Actions
  undo: () => void;
  redo: () => void;
  saveHistory: () => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  template: null,
  elements: [],
  selectedElementId: null,
  history: [],
  historyIndex: -1,

  loadTemplate: (template) => set({
    template,
    elements: template.elements,
    selectedElementId: null,
    history: [template.elements],
    historyIndex: 0
  }),

  selectElement: (id) => set({ selectedElementId: id }),

  updateElement: (id, updates) => {
    set((state) => {
      const newElements = state.elements.map(el =>
        el.id === id ? { ...el, ...updates } as CanvasElement : el
      );
      return { elements: newElements };
    });
    get().saveHistory();
  },

  addElement: (element) => {
    set((state) => ({ elements: [...state.elements, element] }));
    get().saveHistory();
  },

  removeElement: (id) => {
    set((state) => ({
      elements: state.elements.filter(el => el.id !== id),
      selectedElementId: state.selectedElementId === id ? null : state.selectedElementId
    }));
    get().saveHistory();
  },

  updateBackgroundColor: (color) => {
    set((state) => {
      if (!state.template) return state;
      return { template: { ...state.template, backgroundColor: color } };
    });
  },

  saveHistory: () => {
    const { elements, history, historyIndex } = get();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(elements);
    set({ history: newHistory, historyIndex: newHistory.length - 1 });
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      set({
        elements: history[historyIndex - 1],
        historyIndex: historyIndex - 1,
        selectedElementId: null
      });
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      set({
        elements: history[historyIndex + 1],
        historyIndex: historyIndex + 1,
        selectedElementId: null
      });
    }
  }
}));
