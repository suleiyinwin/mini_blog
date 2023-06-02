import './Entry'
import CategoryComponent from './CategoryComponent';

export default function Category({cat,handleClick}){
    const obj=cat.map((el)=> {
        return(
            <CategoryComponent cat={el} handleClick={handleClick} />
        );
    })
    return(
        <div>{obj}</div>
    );
}