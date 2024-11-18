class MyWidget {
    constructor(options) {
        this.options = options;
        this.target = document.querySelector(options.target);
        this.init();
    }

    init() {
        this.target.innerHTML = `
            <div style="padding: 20px; background: ${this.options.theme || '#fff'}; border: 1px solid #ccc;">
                <h2>${this.options.title || 'Default Widget Title'}</h2>
                <p>${this.options.content || 'This is a reusable widget.'}</p>
            </div>
        `;
    }
}

// Export the widget globally
window.MyWidget = MyWidget;
