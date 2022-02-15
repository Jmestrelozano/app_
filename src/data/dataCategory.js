export const dataCategory = {
  modules: [
    {
      title: "Configuración",
      icon: "bi bi-gear-fill",
      target: "subCONFIG",
      submenu: [
        {
          title: "Mantrad PlusII",
          icon: "fa fa-align-left",
          path: "mantradplusII",
        },
        {
          title: "C. Devolución",
          icon: "glyphicon glyphicon-list-alt",
          path: "causdevo",
        },
        {
          title: "Tipo Ubicación",
          icon: "fa fa-map-marker",
          path: "tipoubi",
        },
        {
          title: "Mantrad Plus",
          icon: "fa fa-coffee",
          path: "mantradPlus",
        },
      ],
    },
    {
      title: "Mantenimiento",
      icon: "bi bi-tools",
      target: "subMANTE",
      submenu: [
        {
          title: "Marcas",
          icon: "glyphicon glyphicon-tags",
          path: "marcas",
        },
        {
          title: "Lineas",
          icon: "glyphicon glyphicon-star",
          path: "lineas",
        },
        {
          title: "Productos",
          icon: "glyphicon glyphicon-th",
          path: "productos",
        },
        {
          title: "Personas",
          icon: "glyphicon glyphicon-user",
          path: "personas",
        },
        {
          title: "Empresas",
          icon: "glyphicon glyphicon-globe",
          path: "empresas",
        },
        {
          title: "Cliente/Provedor",
          icon: "glyphicon glyphicon-user",
          path: "clieprov",
        },
        {
          title: "Vendedores",
          icon: "glyphicon glyphicon-user",
          path: "vendedor",
        },
        {
          title: "Precios",
          icon: "glyphicon glyphicon-usd",
          path: "precios",
        },
        {
          title: "Lotes",
          icon: "glyphicon glyphicon glyphicon-pushpin",
          path: "lotes",
        },
        {
          title: "Item",
          icon: "glyphicon glyphicon-ok",
          path: "items",
        },
        {
          title: "Cajas",
          icon: "glyphicon glyphicon-briefcase",
          path: "caja",
        },
        {
          title: "Cuentas Contable",
          icon: "glyphicon glyphicon-briefcase",
          path: "ccontable",
        },
        {
          title: "Ubicacion",
          icon: "fa fa-map-o",
          path: "ubicacion",
        },
        {
          title: "Unidad De Medida",
          icon: "fa fa-th-large",
          path: "unimedi",
        },
      ],
    },
    {
      title: "Movimientos",
      icon: "bi bi-gear-fill",
      target: "subMOViM",
      submenu: [
        {
          title: "Compras",
          icon: "glyphicon glyphicon-shopping-cart",
          path: "compras",
        },
        {
          title: "Cotizaciones",
          icon: "glyphicon glyphicon glyphicon-send",
          path: "cotizacion",
        },
        {
          title: "Atención Clientes",
          icon: "glyphicon glyphicon glyphicon-tags",
          path: "ventas",
        },
        {
          title: "Anular Compra",
          icon: "glyphicon glyphicon glyphicon-repeat",
          path: "anulaCompra",
        },
        {
          title: "Anular Venta",
          icon: "glyphicon glyphicon glyphicon-repeat",
          path: "reversion",
        },
        {
          title: "Retirar Productos",
          icon: "glyphicon glyphicon glyphicon-repeat",
          path: "devoluciones",
        },
      ],
    },
    {
      title: "Inventario",
      icon: "bi bi-binoculars",
      target: "inventario",
      submenu: [
        {
          title: "Inventario",
          icon: "glyphicon glyphicon-check",
          path: "inventario",
        },
        {
          title: "Inventario Gral",
          icon: "glyphicon glyphicon-check",
          path: "inventarioAll",
        },
      ],
    },
    {
      title: "Finanzas",
      icon: "bi bi-coin",
      target: "finanzas",
      submenu: [
        {
          title: "Anticipos",
          icon: "fa fa-money",
          path: "anticipos",
        },
        {
          title: "Ctas x Cobrar",
          icon: "fa fa-adn",
          path: "ccobrar",
        },
        {
          title: "Ctas x Pagar",
          icon: "fa fa-arrows-alt",
          path: "cpagar",
        },
        {
          title: "Caja",
          icon: "glyphicon glyphicon glyphicon-briefcase",
          path: "movicaja",
        },
        {
          title: "Comercial",
          icon: "fa fa-align-left",
          path: "cierre",
        },
        {
          title: "Cierre caja",
          icon: "fa fa-caret-square-o-down",
          path: "cicaja",
        },
        {
          title: "Cierre General",
          icon: "fa fa-lock",
          path: "cierreok",
        },
        {
          title: "Pagos Cliente",
          icon: "fa fa-cc-mastercard",
          path: "resabon",
        },
        {
          title: "Pagos Proveedor",
          icon: "fa fa-archive",
          path: "resaboncpa",
        },
        {
          title: "Cierre Caja Gral",
          icon: "fa fa-briefcase",
          path: "cicapublic",
        },
      ],
    },
    {
      title: "Consultas",
      icon: "bi bi-ui-checks",
      target: "subCONSU",
      submenu: [
        {
          title: "productos no inventariados",
          icon: "fa fa-amazon",
          path: "productosnoinventario",
        },
        {
          title: "Documentos",
          icon: "glyphicon glyphicon-usd",
          path: "facturas",
        },
        {
          title: "Ventas",
          icon: "glyphicon glyphicon-log-out",
          path: "ventfech",
        },
        {
          title: "Compras",
          icon: "glyphicon glyphicon-log-in",
          path: "compfech",
        },
        {
          title: "Ventas Anuladas",
          icon: "glyphicon glyphicon-log-out",
          path: "revfech",
        },
        {
          title: "Prod. Vencidos",
          icon: "glyphicon glyphicon-eye-open",
          path: "vencidos",
        },
        {
          title: "Utilidad",
          icon: "fa fa-area-chart",
          path: "utilidad",
        },
      ],
    },
    {
      title: "Reportes",
      icon: "bi bi-ui-checks",
      target: "subREPOR",
      submenu: [
        {
          title: "Lista de Precios",
          icon: "glyphicon glyphicon-usd",
          path: "listado",
        },
        {
          title: "balance",
          icon: "fa fa-align-justify",
          path: "balance",
        },
      ],
    },
  ],
};
