import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Checkbox,
  useApplyAttributeChange
} from '@shopify/ui-extensions-react/checkout';

// Note: Here there are 2 render blocks. Need to check if it will work. 
export default reactExtension(
  'purchase.checkout.reductions.render-before',
);

function Extension() {
  const translate = useTranslate();
  const applyAttributeChange = useApplyAttributeChange();
  const { extension } = useApi();
  const cart = useCart();
  const customer = useCustomer();

  if (!cart || !customer) {
    return null;
  }

  const customerEmail = customer.email;
  const cartItems = cart.lines;
  var points;
  var cartPointsArray; //An object with product : points key value pairs

  // 2. Render the UI
    return (
      <div> Receive {points} points with this order</div>
      
    );

    // 3. Call API methods here - Move these methods into a .js file to be used by the different extensions
    

        //3a. Return loyalty tiers and redeemable points based on email
        async function getLoyalty(customerEmail){
        };


    //3a. Apply Pay with Points on Total Cart value -> Deduct from Cart subTotalAmount

  
   
}