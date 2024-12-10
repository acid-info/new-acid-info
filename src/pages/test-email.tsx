import NoHeaderFooterLayout from '@/layouts/NoHeaderFooterLayout'
import styled from '@emotion/styled'
import { useState } from 'react'

const EmailTestPage = () => {
  const [formState, setFormState] = useState({ email: '', name: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const errorMessage =
      'There was an error submitting the form. Please try again.'

    try {
      const res = await fetch(
        `https://odoo.logos.co/website_mass_mailing/subscribe2`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'call',
            params: {
              value: formState?.email,
              name: formState?.name || '',
              list_id: 25,
              subscription_type: 'email',
            },
          }),
        },
      )

      const data = await res.json()
      setMessage(data.result.message)
    } catch (error) {
      console.log(error)
      setMessage(errorMessage)
    }
  }

  return (
    <Container>
      <form className="mdx-input-cta-section__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          placeholder="Email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  height: 100%;
  padding: 24px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;

    input {
      &:focus {
        outline: none;
        border-color: black;
      }
      &::placeholder {
        color: #ccc;
      }
    }

    * {
      color: black;
      background: transparent;
      border: none;
      border-bottom: 1px solid black;
      padding: 4px 8px;
      font-family: sans-serif;
    }

    button {
      cursor: pointer;
      background: black;
      color: white;
      border: 1px solid black;
      border-radius: 4px;
      padding: 8px 16px;
      font-size: 16px;
      font-weight: 500;
      margin-top: 20px;

      &:hover {
        background: #2c2c2c;
        transition: background-color 0.2s ease;
      }
    }
  }
`

EmailTestPage.getLayout = (page: React.ReactElement) => (
  <NoHeaderFooterLayout>{page}</NoHeaderFooterLayout>
)

export default EmailTestPage
