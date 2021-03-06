import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteFonts from "vite-plugin-fonts";

export default defineConfig({
	plugins: [
		react(),
		ViteFonts({
			custom: {
				families: [
					{
						name: "Underground Light",
						src: "/assets/Fonts/P22UndergroundPro-Light.otf"
					},
					{
						name: "Underground Book",
						src: "/assets/Fonts/P22UndergroundPro-Book.otf"
					},
					{
						name: "Underground Demi",
						src: "/assets/Fonts/P22UndergroundPro-Demi.otf"
					},
					{
						name: "Underground Medium",
						src: "/assets/Fonts/P22UndergroundPro-Medium.otf"
					},
					{
						name: "Underground Heavy",
						src: "/assets/Fonts/P22UndergroundPro-Heavy.otf"
					}
				],
				display: "auto",
				preload: true
			}
		})
	]
});
