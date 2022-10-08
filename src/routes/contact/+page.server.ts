import type { Actions } from '@sveltejs/kit'
import { invalid } from '@sveltejs/kit'
import type { ValidationError } from '$lib/types/ValidationError'

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const [name, nameError] = validate(data, 'name')
    const [message, messageError] = validate(data, 'message')

    const validationErrors: ValidationError[] = []
    if (nameError) {
      validationErrors.push(nameError)
    }
    if (messageError) {
      validationErrors.push(messageError)
    }

    if (validationErrors.length) {
      return invalid(400, {
        name,
        message,
        errors: validationErrors,
      })
    }

    return { success: true }
  }
}

function validate(data: FormData, field: string): [string, ValidationError?] {
  const value = data.get(field)

  if (value === null) return ['', { field, error: 'missing' }]
  if (typeof value !== 'string') return ['', { field, error: 'invalid' }]

  const trimmed = value.trim()

  if (!trimmed) return [trimmed, { field, error: 'missing' }]

  return [trimmed]
}
