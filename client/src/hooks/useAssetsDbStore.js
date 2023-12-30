import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { OnChecking, onLogin, onLogout } from "../store/authSlice";
import { dbApi } from "../helpers/dbApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { onAddprice, onCheckingAsset, onLoadAssets } from "../store/assetSlice";

export const useAssestsDbStore = () => {


    const {  user } = useSelector( state => state.auth );
    const { loading, coins  } = useSelector( state => state.assets );
    const dispatch = useDispatch();

    const startLoadingAssets = async() => {
        dispatch( onCheckingAsset() );

        try {

            const result = await dbApi.post("/main/portfolio", {
                userId: user.id
            } )

            let number = 1;
            const assetSymbol = result.data.result.map( (asset) => {
                return {
                    symbol: asset.symbol,
                    quantity: asset.quantity.$numberDecimal,
                    number: number++
                }
            } )

            dispatch( onLoadAssets( assetSymbol ) );
            
        } catch (error) {
            console.log(error);
        }      

    }

    const startAddPrice = ( prices ) => {

        dispatch( onCheckingAsset() );


        dispatch( onAddprice( prices ) );        

    }

    // const startLogin = async( email, password ) => {

    //     dispatch(OnChecking());

    //     try {

    //         const {data} = await dbApi.post('/auth/login', {
    //             email: email,
    //             password: password
    //         } );

    //         localStorage.setItem( 'Token', data.token );

    //         console.log(data);

    //         dispatch( onLogin( data ) );

    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Welcome',
    //             text: user.name,
    //             timer: 1500
    //           })

    //           setTimeout( () => {
    //             navigate('/main', { replace: true });

    //           }, 1600 );

            
    //     } catch (error) {

    //         console.log( error );
    //         dispatch( onLogout( error.response.data ) );
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: error.response.data.message,
    //           })
            
    //     }        
    // }


    

    return {
        // propiedades
        loading,
        coins,

        //funciones
        startLoadingAssets,
        startAddPrice,
    }

}