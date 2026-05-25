const api = "https://6a1453306c7db8aac0544c30.mockapi.io/api/purchases/items";

export const addItem = async(text: string) => {
    if (text == undefined || text == null || text == "" || text == " ") {
        console.log("error: text is null");
    } else {
        try {
           const response = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};

export const deleteItem = async (id: string | number) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Ошибка удаления: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItems = async() => {
    const response = await fetch(api, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
}