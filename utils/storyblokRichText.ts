// utils/storyblokRichText.ts
export function renderRichText(doc: any): string {
	if (!doc || !doc.content) return ''

	return doc.content.map((node: any) => {
		switch (node.type) {
			case 'paragraph':
				return `<p>${(node.content?.map((c: any) => c.text).join('')) || ''}</p>`

			case 'heading':
				const level = node.attrs?.level || 2
				return `<h${level}>${(node.content?.map((c: any) => c.text).join('')) || ''}</h${level}>`

			case 'list':
				const tag = node.attrs?.type === 'ordered' ? 'ol' : 'ul'
				const items = (node.content?.map((li: any) => `<li>${(li.content?.map((c: any) => c.text).join('')) || ''}</li>`).join('')) || ''
				return `<${tag}>${items}</${tag}>`

			default:
				return (node.content?.map((c: any) => c.text).join('')) || ''
		}
	}).join('')
}