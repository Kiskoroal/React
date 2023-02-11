import PropTypes from 'prop-types';
// const getSaludo = {
//     saludo: 'Hola, que tal estas don ',
//     nombre: 'Mamolo'
// };

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando',
// };
                                                                                                                       
export const FirstApp = ( {title, subtitle, name} ) => { 

    return(              
        <div data-testid = 'test-title'>
        <h2> { title } </h2>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{ name }</p>
        </div>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay ningún título',
    subtitle: 'No hay subtítulo',
    // name : 'No hay nombre'
}