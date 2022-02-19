import { useKeycloak } from "@react-keycloak/web";

const ProtectedRoute = ({ children }) => {

    const {keycloak, initialized} = useKeycloak();
 
    if (keycloak) {
        if (keycloak.authenticated) {
            console.log('USER AUTHENTICATED');
            console.log(children);
            return children;
        } else {
            console.log('USER NOT AUTHENTICATED')
            return (<div>User not authenticated</div>);
            
        }
    } else {
        console.log('KEYCLOAK IS NULL');
        return (<div>Keycloak is null</div>);
    }
}
 
export default ProtectedRoute;