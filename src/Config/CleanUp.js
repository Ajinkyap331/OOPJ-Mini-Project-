import Data from "../Modules/Data"

export const CleanUP = () => {
    Data.Asked = Array(Data.Q.length).fill(0)
    Data.fav = Array(Data.Q.length).fill(0.0);
    Data.final = [-1];
}