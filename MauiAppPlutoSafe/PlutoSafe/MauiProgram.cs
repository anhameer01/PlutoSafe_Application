using Microsoft.Extensions.Logging;
using System;
using System.Net.Http;

namespace PlutoSafe;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
				fonts.AddFont("Inter-SemiBold.otf", "InterSemiBold");
			});

		builder.Services.AddMauiBlazorWebView();


		builder.Services.AddScoped(Sp => new HttpClient
		{
			BaseAddress= new Uri("https://devmobileapi.plutosafe.in/")
		});
		
		builder.Services.AddScoped<UserSession>();


#if DEBUG
		builder.Services.AddBlazorWebViewDeveloperTools();
		builder.Logging.AddDebug();
#endif

		return builder.Build();
	}
}
