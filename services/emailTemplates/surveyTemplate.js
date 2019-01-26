module.exports = (survey) => {
    return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3> I;d like your imput!</h3>
                <p>please answer:</P>
                <p>${survey.body}</p>
            </div>
            <div>
                <a href="http://localhost:3000">Yes</a>
            </div>
            <div>
                <a href="http://localhost:3000">NO</a>
            </div>
        </body>
    </html>

    `;
};