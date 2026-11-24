import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['aa63747cb859482299178e73f0ad9e07'],
    table: 'sys_dictionary',
    data: {
        active: true,
        array: false,
        audit: false,
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        choice: 1,
        column_label: 'Classify',
        display: false,
        dynamic_creation: false,
        element: 'x_1637173_sd_my_0_classify',
        element_reference: false,
        function_field: false,
        internal_type: 'choice',
        mandatory: false,
        max_length: 40,
        name: 'customer_account',
        primary: false,
        read_only: false,
        reference_floats: false,
        spell_check: false,
        staged: false,
        table_reference: false,
        text_index: false,
        unique: false,
        use_dependent_field: false,
        use_dynamic_default: false,
        use_reference_qualifier: 'simple',
        virtual: false,
        virtual_type: 'script',
        xml_view: false,
    },
})
