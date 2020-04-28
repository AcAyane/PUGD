
import React from 'react'
import Router from 'next/router'

const allowedRoutes = [
      '/auth/login',
      '/admin/register'
]
const protect = function (Child) {
      return class Higher extends React.Component {

            static async getInitialProps({ ctx }) {

                  if (allowedRoutes.includes(ctx.pathname)) {

                        return { allowed: true }
                  }
                  return { allowed: false }
            }

            constructor(props) {
                  super(props)
                  this.state = {
                        isLoading: true
                  };
            }

            haveToken() {

                  let jwt
                  if (typeof window !== 'undefined') {
                        jwt = localStorage.getItem('token');
                        if (!jwt) return false
                        const jwtParts = jwt.split('.')
                        if (jwtParts.length < 2) {
                              localStorage.removeItem('token');
                              return false
                        }
                        const base64Url = jwtParts[1]
                        const base64 = base64Url.replace('-', '+').replace('_', '/')
                        const jwtClaims = JSON.parse(window.atob(base64))


                        if (jwtClaims.exp * 1000 > Date.now())
                              return true
                        localStorage.removeItem('token');
                        return false
                  }

            }
            render() {
                  if (this.props.allowed || this.haveToken()) {

                        return <Child {...this.props} />
                  }

                  if (typeof window !== 'undefined') Router.push('/auth/login')
                  return <div> Loading ....</div>
            }
      }
}

export default protect;