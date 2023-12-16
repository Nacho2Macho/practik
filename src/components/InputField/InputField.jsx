// InputField.jsx
import clsx from 'clsx';

export default function InputField({
  label,
  id,
  type,
  placeholder,
  description,
  rowClasses,
  titleClasses,
  labelClasses,
  inputClasses,
  descriptionClasses,
  required,
  ...props
}) {

  return (
    <div className={clsx(rowClasses, 'row')}>
      <p className={clsx(titleClasses, 'title')}>
        {label}
        {required && <span className={clsx(titleClasses, 'star')}>*</span>}
      </p>
      <label htmlFor={id} className={clsx(labelClasses, 'label')}>
        <input id={id} type={type} placeholder={placeholder} className={clsx(inputClasses, 'input')} {...props} />
      </label>
      <p className={clsx(descriptionClasses, description)}>{description}</p>
    </div>
  );
}