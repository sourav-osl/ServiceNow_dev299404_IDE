import { Table, StringColumn } from '@servicenow/sdk/core'

export const incident = Table({
    augments: 'incident',
    schema: {
        x_1637173_sd_my_0_git_check: StringColumn({
            label: 'Git Check',
        }),
    },
})
