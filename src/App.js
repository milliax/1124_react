import Button from "./components/Button";
import CustomImage from "./components/CustomImage";

function App() {
    return (
        <div className="bg-gradient-to-tr from-black to-gray-900 h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            <CustomImage />
            <div className="bg-gradient-to-t from-orange-200 to-amber-200 w-80 rounded-md px-3 py-5">
                <div className="text-center font-bold text-lg">
                    Milliax 連結樹
                </div>
                <div className="flex flex-col pt-5">
                    <Button url="https://facebook.com/milliacs"
                        text="Facebook"
                    />
                    <Button url="https://instagram.com/milliacs"
                        text="Instagram"
                    />
                    <Button url="https://github.com/milliax"
                        text="Github"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
