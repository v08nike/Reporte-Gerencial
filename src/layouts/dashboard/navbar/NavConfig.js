// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
// import Label from '../../../components/Label';
// import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      {
        title: 'Comercio Exterior ',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
        children: [
          { title: 'Exportaciones', path: '#' },
          { title: 'Importanciones', path: '#' },
        ],
      },
      {
        title: 'Titulos Habilitantes',
        path: '',
        icon: ICONS.ecommerce,
        children: [
          { title: 'Concesiones', path: '#' },
          { title: 'Autorizaciones', path: '#' },
          { title: 'Permisos', path: '#' },
        ],
      },
      {
        title: 'Control de Productos',
        path: '',
        icon: ICONS.analytics,
        children: [
          { title: 'Productos transferidos', path: '#' },
          { title: 'Productos Forestales Clasificados para ser Transferidos', path: '#' },
        ],
      },
      {
        title: 'Produccion, Industria y Comercio',
        path: '',
        icon: ICONS.banking,
        children: [
          { title: 'Producción Forestal', path: '#' },
          { title: 'Depósitos y establecimientos', path: '#' },
          { title: 'Centros de transformación', path: '#' },
          { title: 'Precios Forestales', path: '#' },
        ],
      },
      {
        title: 'Fauna silvestre ',
        path: '',
        icon: ICONS.booking,
        children: [
          { title: 'Curso de educación, seguridad y ética en la caza deportiva', path: '#' },
          { title: 'Licencias de caza deportiva', path: '#' },
          { title: 'Registro de Empresas Autorizadas', path: '#' },
          { title: 'Centro de manejo/cría de fauna silvestre', path: '#' },
        ],
      },
      {
        title: 'Camélidos Sudamericanos Silvestres  ',
        path: '',
        icon: ICONS.booking,
        children: [
          { title: 'Camélidos Sudamericanos', path: '#' },
          { title: 'Declaraciones de Manejo', path: '#' },
        ],
      },
      {
        title: 'Registros Nacionales',
        path: '',
        icon: ICONS.booking,
        children: [
          { title: 'Regentes Forestales y de Fauna Silvestre', path: '#' },
          { title: 'Plantaciones Forestales', path: '#' },
          { title: 'Infractores', path: '#' },
          { title: 'Especialistas', path: '#' },
        ],
      },
      {
        title: 'Otros Registros ',
        path: '',
        icon: ICONS.booking,
        children: [
          { title: 'Registro de Acceso a Recursos Genéticos', path: '#' },
          { title: 'Instituciones Científicas Nacionales Depositarias de Material Biológico', path: '#' },
        ],
      },
      {
        title: 'Publicaciones',
        path: '',
        icon: ICONS.booking,
        children: [
          { title: 'Anuarios', path: '#' },
          { title: 'Boletines', path: '#' },
          { title: 'Tablas Maestras', path: '#' },
        ],
      },
      {
        title: 'Videotutoriales',
        path: '',
        icon: ICONS.booking,
        children: [
          { title: 'Aplicativo de vicuñas', path: '#' },
          { title: 'Plantaciones Forestales', path: '#' },
        ],
      },
    ],
  },
];

export default navConfig;
