import { useState, useEffect } from 'react';
import Header from "./components/Header/Header"
import TextBoxBar from "./components/TextBoxBar/TextBoxBar"
import Footer from "./components/Footer/Footer"
import Toast from "./components/Toast/Toast"
import Loader from './components/Loader/Loader';
import Item from "./components/Item/Item"

import { getItems, addItem, deleteItem } from './api';

const App = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [toast, setToast] = useState<{ text: string; variant: string } | null>(null);
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);

  const askPassword = () => {
    let pass: string | null;

    do {
      pass = prompt("Enter password");
    } while (pass !== "пердун");
  };

  useEffect(() => {
    askPassword();
  }, []);

  const hideToast = () => {
    setTimeout(() => {
        setToast(null);
      }, 4000);
  };

  const fetchData = async() => {
    try {
      setLoaderVisible(true);
      const result = await getItems();
      setData(result);
    } catch(error) {
      console.error("error: ", error);
      setToast({ text: "Ошибка загрузки данных. Попробуй обновить страницу или повторить позже", variant: 'error' });
    } finally {
      setLoaderVisible(false);
      hideToast();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = async (text: string) => {
    try {
      setLoaderVisible(true);
      await addItem(text);
      setToast({ text: 'Элемент добавлен', variant: 'success' });
      await fetchData();
    } catch (error) {
      console.error("error: ", error);
      setToast({ text: "Ошибка добавления", variant: 'error' });
    } finally {
      setLoaderVisible(false);
      hideToast();
    }
  }

  const handleDeleteItem = async (id: string | number) => {
    try {
      setLoaderVisible(true);
      await deleteItem(id);
      setToast({ text: 'Элемент удалён', variant: 'success' });
      await fetchData();
    } catch (error) {
      console.error(error);
      setToast({ text: 'Ошибка удаления', variant: 'error' });
    } finally {
      setLoaderVisible(false);
      hideToast();
    }
  };

  return (
    <>
      {toast && <Toast text={toast.text} variant={toast.variant} />}
      <Header />
      <main>
        <div className="container">
          <TextBoxBar onAddItem={handleAddItem} />
          <div className="purchaseBlock">
            <h1 style={{ marginBottom: '20px' }}>Шо купит:</h1>
            <ul className="itemList">
              {loaderVisible ? (
                <Loader visible={true} />
              ) : (
                <>
                  {data && data.length ? (
                    data.map(({ id, text }) => <Item key={id} id={id} text={text} onDelete={handleDeleteItem} />)
                  ) : (
                    <span className='nullList'>Тут ничего нет :(</span>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
