const blob = {

    primary: (text, colors) => {
        return `
        <svg
            id="visual"
            viewBox="0 0 900 450"
            width="900"
            height="450"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            >
            <style>
                .title {
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 100px;
                font-weight: 500;
                fill: #fff;
                }
            </style>
            <rect x="0" y="0" width="900" height="450" fill="${colors.background}" /><defs
            ><linearGradient id="grad1_0" x1="50%" y1="0%" x2="100%" y2="100%"><stop
                    offset="10%"
                    stop-color="${colors.secondary}"
                    stop-opacity="1"
                /><stop
                    offset="90%"
                    stop-color="${colors.secondary}"
                    stop-opacity="1"
                /></linearGradient></defs><defs><linearGradient
                id="grad1_1"
                x1="50%"
                y1="0%"
                x2="100%"
                y2="100%"
                ><stop offset="10%" stop-color="${colors.secondary}" stop-opacity="1" /><stop
                    offset="90%"
                    stop-color="${colors.background}"
                    stop-opacity="1"
                /></linearGradient></defs><defs><linearGradient
                id="grad2_0"
                x1="0%"
                y1="0%"
                x2="50%"
                y2="100%"
                ><stop offset="10%" stop-color="${colors.secondary}" stop-opacity="1" /><stop
                    offset="90%"
                    stop-color="${colors.secondary}"
                    stop-opacity="1"
                /></linearGradient></defs><defs><linearGradient
                id="grad2_1"
                x1="0%"
                y1="0%"
                x2="50%"
                y2="100%"
                ><stop offset="10%" stop-color="${colors.background}" stop-opacity="1" /><stop
                    offset="90%"
                    stop-color="${colors.secondary}"
                    stop-opacity="1"
                /></linearGradient></defs><g transform="translate(900, 0)"><path
                d="M0 337.5C-44.2 332.8 -88.4 328.1 -129.2 311.8C-169.9 295.5 -207.2 267.6 -234.1 234.1C-260.9 200.5 -277.4 161.3 -292.9 121.3C-308.4 81.4 -322.9 40.7 -337.5 0L0 0Z"
                fill="${colors.primary}"
                /><path
                d="M0 168.8C-22.1 166.4 -44.2 164.1 -64.6 155.9C-85 147.8 -103.6 133.8 -117 117C-130.5 100.2 -138.7 80.6 -146.4 60.7C-154.2 40.7 -161.5 20.3 -168.7 0L0 0Z"
                fill="${colors.secondary}"
                /></g><g transform="translate(0, 450)"><path
                d="M0 -337.5C41.2 -326.9 82.4 -316.2 125.1 -302.1C167.9 -288 212.2 -270.4 238.6 -238.6C265.1 -206.9 273.8 -161.1 287.3 -119C300.8 -76.9 319.2 -38.4 337.5 0L0 0Z"
                fill="${colors.primary}"
                /><path
                d="M0 -168.7C20.6 -163.4 41.2 -158.1 62.6 -151.1C83.9 -144 106.1 -135.2 119.3 -119.3C132.6 -103.5 136.9 -80.6 143.7 -59.5C150.4 -38.4 159.6 -19.2 168.8 0L0 0Z"
                fill="${colors.secondary}"
                /></g>
            <text x="50%" y="50%" class="title" text-anchor="middle" alignment-baseline="central">${text}</text>
        </svg>
        `
    }

}

module.exports = blob