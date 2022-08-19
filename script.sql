USE [Biblioteca]
GO
/****** Object:  Table [dbo].[Libros]    Script Date: 18/08/2022 09:43:33 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Libros](
	[IdLibro] [bigint] IDENTITY(1,1) NOT NULL,
	[NombreLibro] [varchar](2500) NOT NULL,
	[Imagen] [varchar](2500) NOT NULL,
 CONSTRAINT [PK_Libros] PRIMARY KEY CLUSTERED 
(
	[IdLibro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
