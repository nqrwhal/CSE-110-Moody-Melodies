/**
 * @description Function for each button that needs to send a string to the server
 * @author Angelo Aromin
 */

export const sendToServer = async (endpoint: string, emotion: object) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emotion),
    });
    /* Optional if response is needed
    if (!response.ok) {
      throw new Error("Failed to send data to the server");
    }
    const data = await response.json();
    return data;
    */
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
