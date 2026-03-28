import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({totalItems})
          </SheetTitle>
          <SheetDescription>Review your items and checkout</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
            <div>
              <p className="font-semibold text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1">Add some delicious meals to get started!</p>
            </div>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Browse Menu</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm leading-tight truncate">{item.name}</h4>
                      <p className="text-xs text-primary font-medium mt-0.5">{item.protein} Protein</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="h-7 w-7 rounded-full border flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="h-7 w-7 rounded-full border flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">₹{item.price * item.quantity}</span>
                          <button onClick={() => removeItem(item.name)} className="text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-semibold text-primary">{totalPrice >= 500 ? "Free" : "₹49"}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg">₹{totalPrice + (totalPrice >= 500 ? 0 : 49)}</span>
              </div>
              {totalPrice < 500 && (
                <p className="text-xs text-muted-foreground text-center">Add ₹{500 - totalPrice} more for free delivery</p>
              )}
              <Button className="w-full" size="lg">Proceed to Checkout</Button>
              <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
