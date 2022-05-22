import axios from "axios";

export default class Data {
    static Q = [];
    static Asked = []
    static fav = []
    static start = ["Is", "Does"];
    static Final = [-1];

    static getQuestions = () => {
        axios.get("http://127.0.0.1:8000/questions/").then(data => {
            this.Q = data.data
            this.Asked = Array(this.Q.length).fill(0)
            this.fav = Array(this.Q.length).fill(0.0);
        })
    }
    static getCharacters = () => {
        axios.get("http://127.0.0.1:8000/characters/").then(data => {
            this.Name = data.data
        })
    }
}