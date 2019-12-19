import classNames   from 'classnames';
import PropTypes    from 'prop-types';
import React        from 'react';
import { Checkbox } from 'deriv-components';
import { localize } from 'deriv-translations';
import { connect }  from 'Stores/connect';

const AllowEquals = ({
    onChange,
    is_allow_equal,
    className,
}) => {
    const handleOnChange = (e) => {
        e.persist();
        const { name, checked } = e.target;
        onChange({ target: { name, value: Number(checked) } });
    };

    return (
        <div className={classNames('allow-equals', 'mobile-widget', className)}>
            <Checkbox
                label={localize('Allow Equal')}
                value={is_allow_equal}
                name='is_equal'
                onChange={handleOnChange}
            />
            <p>Allow equals description</p>
        </div>
    );
};

AllowEquals.propTypes = {
    is_allow_equal: PropTypes.bool,
    onChange      : PropTypes.func,
};

export default connect(({ modules }) => ({
    is_allow_equal: !!modules.trade.is_equal,
    onChange      : modules.trade.onChange,
}))(AllowEquals);
