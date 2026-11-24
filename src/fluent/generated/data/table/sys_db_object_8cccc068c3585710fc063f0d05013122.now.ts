import { Table } from '@servicenow/sdk/core'

export const x_1637173_sd_my_0_sd_my_table = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowConfiguration: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'SD My Table',
    name: 'x_1637173_sd_my_0_sd_my_table',
    schema: {},
    createAccessControls: true,
})
