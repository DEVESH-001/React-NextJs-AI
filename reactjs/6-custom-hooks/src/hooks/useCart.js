// //custom hook to manage shopping cart state
// import { useEffect, useMemo, useState } from "react";

// export function useCart() {
//   const [cart, setCart] = useState(() => {
//     //lazy initial state
//     try {
//       const savedCart = localStorage.getItem("cart");
//       return savedCart ? JSON.parse(savedCart) : []; //localStorage returns string so we need to parse it
//     } catch (error) {
//       console.log("Error loading cart from localStorage:", error);
//       return [];
//     }
//   });
//   //sync cart state to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     } catch (error) {
//       console.log("Error saving cart to localStorage:", error);
//     }
//   }, [cart]);

//   //sync cart state across multiple tabs
//   useEffect(() => {
//     const handleStorage = (e) => {
//       if (e.key === "cart") {
//         //only respond to changes to "cart" key
//         try {
//           const newCart = JSON.parse(e.newValue || "[]");
//           setCart(newCart);
//         } catch (error) {
//           console.log("Error syncing cart from localStorage:", error);
//         }
//       }
//     };
//     window.addEventListener("storage", handleStorage); //this event fires in other tabs when localStorage changes
//     return () => window.removeEventListener("storage", handleStorage); //cleanup
//   }, []);

//   const addToCart = (product) => {
//     setCart((currentCart) => {
//       const exisitingItem = currentCart.find((item) => item.id === product.id);
//       if (exisitingItem) {
//         return currentCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...currentCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((currentCart) =>
//       currentCart.filter((item) => item.id !== productId)
//     );
//   };

//   const updateQuantity = (productId, quantity) => {
//     if (quantity < 1) return;
//     setCart((currentCart) =>
//       currentCart.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   //calculate total price using useMemo for performance optimization, in react-19 useMemo is not required
//   const total = useMemo(() => {
//     return Number(
//       cart
//         .reduce((sum, item) => {
//           const itemTotal = item.price * (item.quantity || 0);
//           return sum + itemTotal;
//         }, 0)
//         .toFixed(2)
//     );
//   }, [cart]);

//   return {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     total,
//   };
// }




import { useState, useEffect, useMemo } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localstorage", error);
      return [];
    }
  });

  // Persist cart to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localstorage", error);
    }
  }, [cart]);

  //Sync across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cart") {
        try {
          const newCart = JSON.parse(e.newValue || "[]");
          setCart(newCart);
        } catch (error) {
          console.error("Failed to parse cart from localstorage", error);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  //This is NOT required in React 19 or later
  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => {
          const itemTotal = item.price * (item.quantity || 0);
          return sum + itemTotal;
        }, 0)
        .toFixed(2)
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
  };
}
