import React from 'react'
import '../css/TemplateSelector.css'

const TemplateSelector = ({ selectedTemplate, onSelectTemplate }) => {
  const templates = [
    { id: 'idCard', name: 'ID Card', description: 'Professional ID Card Style' },
    { id: 'roundedCard', name: 'Rounded Card', description: 'Modern Rounded Design' },
    { id: 'fullBleed', name: 'Full-Bleed', description: 'Photo Background Style' }
  ]

  return (
    <div className="template-selector-container">
      <h3>Choose Card Template</h3>
      <div className="templates-grid">
        {templates.map(template => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'active' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className={`template-preview ${template.id}`}>
              <div className="preview-content"></div>
            </div>
            <div className="template-info">
              <p className="template-name">{template.name}</p>
              <p className="template-desc">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector
