/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "purple-bg": "url('/public/img/purple.png')",
            },
            animation: {
                'bounce': 'bounce 3s linear infinite',
              }
        },
    },
    daisyui: {
        themes: ["dark",
            {
                mytheme: {
                    primary: "#4c1d95",
                    secondary: "#d946ef",
                    accent: "#1FB2A5",
                    neutral: "#191D24",
                    "base-100": "#2A303C",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#f59e0b",
                    error: "#F87272",
                    extra: "#100C28",
                    dark: "#121212",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
