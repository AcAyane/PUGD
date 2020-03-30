const SidebarItems = [
  'Acquisition',
  {
    Label: 'Provider',
    Children: [
      {
        Label: 'List Providers',
        href: '/admin/acquisition/AllProviders'
      },
      {
        Label: 'New provider',
        href: '/admin/acquisition/AddProvider'
      }
    ]
  },
  {
    Label: 'Quotation',
    Children: [
      {
        Label: 'New Quotation',
        href: '/admin/acquisition/Addquotation'
      },
      {
        Label: 'List Quotations',
        href: '/admin/acquisition/AllQuotations'
      }
    ]
  }
];
export default SidebarItems;
