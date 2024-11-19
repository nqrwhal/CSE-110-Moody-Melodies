import React, { useState } from "react";

export const SurveyAPICall = () => {
    const [inputValue, setInputValue] = useState("");
    const [serverResponse, setServerResponse] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/survey/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: inputValue }),
            });

            const data = await response.json();
            setServerResponse(data.message);
        } catch (error) {
            console.error("Error:", error);
            setServerResponse("Error connecting to the server.");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>React Form with Express</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a message:
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Send</button>
            </form>
            <div style={{ marginTop: "20px" }}>
                <h2>Server Response:</h2>
                <p>{serverResponse}</p>
            </div>
        </div>
    );
}