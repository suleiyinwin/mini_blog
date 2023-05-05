import './Entry'
import CategoryComponent from './CategoryComponent';

export default function Category({cat}){
    const obj=cat.map((el)=> {
        return(
            <CategoryComponent cat={el} />
        );
    })
    return(
        <div>{obj}</div>
    );
}