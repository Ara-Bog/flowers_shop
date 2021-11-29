const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount:0
};

const getTotalPrice = arr => arr.reduce((total, obj) => obj.price + total, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };
  
const getTotalSum = (obj, path) => {
return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
}, 0);
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FLOWER_BASKET':{
            const currentFlowerItems = !state.items[action.payload.productId] 
            ? [action.payload] 
            : [...state.items[action.payload.productId].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.productId]: {
                    items: currentFlowerItems,
                    totalPrice: getTotalPrice(currentFlowerItems)}

            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            return {
                ...state,
                items: newItems,
                totalPrice,
                itemsCount: totalCount
            };
        }
        case 'REMOVE_ITEM_BASKET': {
            const newItems = {
                ...state.items
            };
            const currentPrice = newItems[action.payload].totalPrice
            const currentTotal = newItems[action.payload].items.length
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentPrice,
                itemsCount: state.itemsCount - currentTotal
            };
        }
        case 'PLUS_ITEM_BUTTON':{            
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
              ];
              const newItems = {
                ...state.items,
                [action.payload]: {
                  items: newObjItems,
                  totalPrice: getTotalPrice(newObjItems),
                },
              };
        
              const totalCount = getTotalSum(newItems, 'items.length');
              const totalPrice = getTotalSum(newItems, 'totalPrice');
        
              return {
                ...state,
                items: newItems,
                itemsCount: totalCount,
                totalPrice,
              };
        }
        case 'MINUS_ITEM_BUTTON':{
            const oldItems = state.items[action.payload].items;
            const newObjItems =
              oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
              ...state.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              itemsCount: totalCount,
              totalPrice,
            };
        }; 
        default:
            return state;
    };
}

export default basket; 