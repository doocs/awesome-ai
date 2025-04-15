import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    giscusTalk(
      {
        repo: "doocs/awesome-ai",
        category: "Announcements",
        categoryId: "DIC_kwDOLiX9oM4CpHYt",
        repoId: "R_kgDOLiX9oA",
        mapping: "pathname",
        inputPosition: "top",
        strict: "1",
        reactionsEnabled: "1",
        loading: "lazy",
        lightTheme: "light",
        darkTheme: "transparent_dark",
      },
      {
        frontmatter,
        route,
      },
      true
    );
  },
};