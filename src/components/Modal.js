import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import FlowerBasket from './FlowerBasket';
import { removeItemBasket, plusItem, minusItem } from '../redux/actions/basket';

const customStyles = {
	overlay: {
		backgroundColor: '#181818db'
	},
	content: {
		position: 'relative',
		inset: 'unset',
		display: 'flex',
		margin: 'auto',
		zIndex: 20,
		flexDirection: 'column',
		maxWidth: '550px',
		padding: '10px 10px',
		background: 'unset',
		border: 'none',
	},
  };
  
  ReactModal.setAppElement('body');
  
function Modal() {
    const {items, totalPrice, itemsCount} = useSelector(({basket}) => basket)
	const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch()

    const listFlowers = Object.keys(items).map(key => {
        return items[key].items[0];
    })

    const onRemoveItem = (productId, name) => {
        if (window.confirm("Вы действительно хотите удалить " + name + " ?")) {
            dispatch(removeItemBasket(productId));
        }
    }

    const onPlusItem = (productId) => {
        dispatch(plusItem(productId));
    }

    const onMinusItem = (productId) => {
        dispatch(minusItem(productId));
    }
    
	function openModal() {
	  setIsOpen(true);
	}
  
	function closeModal() {
	  setIsOpen(false);
	}
  
	return (
		<div className="basket">
			<div onClick={openModal}>
				<img src={process.env.PUBLIC_URL +"/icons/basket.svg"} alt="" />
                <div className={"basket--counter " + (itemsCount === 0 ? "basket--counter--empty": "")}>{itemsCount}</div>
			</div>
		<ReactModal
		  isOpen={modalIsOpen}
		  closeTimeoutMS={200}
		  onRequestClose={closeModal}
		  style={customStyles}>
		  <div className="modal_basket">
                <div className="modal_basket__cross" onClick={closeModal}>
                    <img src="../assets/icons/cross_modal.svg" alt="" />
                </div>
                <div className={"modal_basket__block " + (itemsCount === 0 ? "basket--empty": "")}>
                    <form action="">
                        <h2>Корзина</h2>
                        <p className="basket--empty_label">В корзине пока нет товаров :(</p>
                        <div className="basket__content ">
                            {listFlowers.map(obj =>
                                <FlowerBasket 
                                    key={obj.productId} {...obj} 
                                    totalPrice={items[obj.productId].totalPriceItem}
                                    itemsCount={items[obj.productId].items.length}
                                    onRemove={onRemoveItem}
                                    onPlusItem={onPlusItem}
                                    onMinusItem={onMinusItem}
                                />
                            )}
                        </div>
                        <div className="order__summ">
                            <p>Сумма:<span>{totalPrice}</span></p>
                        </div>
                        <button className="button__catalog order__submit">Оформить заказ</button>
						<div className="order--empty">
							<Link className="button__catalog toCatalog"  onClick={closeModal} to="/catalog">Перейти в каталог</Link>
						</div>
                    </form>
                </div>
            </div>
		</ReactModal>
	  </div>
	);
}
export default Modal