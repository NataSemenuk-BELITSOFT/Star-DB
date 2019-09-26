import React from 'react';
import './ItemList.css';

const ItemList = (props) => { 
    const { data, onItemSelected, renderData } = props; 
    const items = data.map((item) => {
        const { id } = item;
        const label = renderData(item);
        return(
            <li className = 'itemList__item'
                key = {id}
                onClick = {() => onItemSelected(id)}>
                {label}
            </li>
        );
    });
    return (
        <ul className = 'itemList'>
            {items}
        </ul>
    );
}
export default ItemList;

// import React, {Component} from 'react';
// import './ItemList.css';
// import Spinner from '../Spinner/Spinner';
// import SwapiService from '../../services/swapi-service';

// export default class ItemList extends Component {
    
//     state = {
//         itemList: null,
//     };

//     componentDidMount() {
//         const { getData } = this.props;

//         getData()
//         .then((itemList) => {
//             this.setState({
//                 itemList,
//             });
//         });
//     }
//     renderItem(arr) {
//         return arr.map((item) => {
//             const {id} = item;
//             const value = this.props.renderData(item);
//             return(
//                 <li className = 'itemList__item'
//                     key = {id}
//                     onClick = {() => this.props.onItemSelected(id)}>
//                     {value}
//                 </li>
//             );
//         });
//     }
//     render() {
//         const {itemList} = this.state;

//         if (!itemList) {
//             return (
//                 <ul className = 'itemList'>
//                     <Spinner />
//                 </ul>
                
//             );
//         }

//         const items = this.renderItem(itemList);
//         return (
//             <ul className = 'itemList'>
//                 {items}
//             </ul>
//         );
//     } 
// }