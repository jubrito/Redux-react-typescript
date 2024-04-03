import { useSelector, useDispatch } from "react-redux";
import {
    addLanguages,
    useLanguages,
    favoriteLanguage,
} from "./redux/sliceLanguages";
import { useState } from "react";

function App() {
    const languagesSelector = useSelector(useLanguages);
    const [newLanguage, setNewLanguage] = useState("");
    const dispatchAction = useDispatch();

    return (
        <div className="App">
            <ul>
                {languagesSelector.map((language) => {
                    return (
                        <li key={language.name}>
                            <span
                                style={{
                                    color: language.favorite
                                        ? "green"
                                        : "black",
                                }}>
                                {language.name}
                            </span>
                            <button
                                type="button"
                                onClick={() =>
                                    dispatchAction(
                                        favoriteLanguage(language.name)
                                    )
                                }>
                                {language.favorite
                                    ? "Desfavoritar"
                                    : "Favoritar"}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <input
                    type="text"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => dispatchAction(addLanguages(newLanguage))}>
                    Adicionar nova linguagem
                </button>
            </div>
        </div>
    );
}

export default App;
