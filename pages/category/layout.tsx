
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import styles from '@/app/layout.module.css'
import {Header} from "@/app/Layout/Header/Header"
import {Footer} from "@/app/Layout/Footer/Footer"
import {Sidebar} from "@/app/Layout/Sidebar/Sidebar"

const inter = Inter({ subsets: ['latin'] })
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={styles.Wrapper}>
      <Header className={styles.Header} />
        <Sidebar className={styles.Sidebar} />
        <div className={styles.body}>
          {children}
        </div>
      <Footer className={styles.Footer} />
      </div>
      </body>
    </html>
  )
}