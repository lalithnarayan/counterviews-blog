export default {
  name: 'subImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'size',
      type: 'string',
      description: "Select how the image will be shown",
      title: 'Image Size',
      options: {
        list: ['large','medium','small'],
        layout: 'radio',
        direction: 'horizontal',
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    }
  ]
}
