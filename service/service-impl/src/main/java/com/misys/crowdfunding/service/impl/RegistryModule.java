package com.misys.crowdfunding.service.impl;

import com.misys.crowdfunding.provider.api.IMahoutProvider;
import com.misys.crowdfunding.provider.api.IProjectDAO;
import com.misys.crowdfunding.service.api.IMetricsService;
import com.misys.crowdfunding.service.api.IProjectService;
import com.trmsys.cargo.extender.Module;
import org.javabits.yar.guice.AbstractRegistryModule;

/**
 * Created by kdeveloper on 9/21/15.
 */
@Module
public class RegistryModule extends AbstractRegistryModule {
    @Override
    protected void configureRegistry() {
        register(IProjectService.class).to(ProjectService.class);
        register(IMetricsService.class).to(MetricsService.class);

        bind(IProjectDAO.class).toRegistry();
        bind(IMahoutProvider.class).toRegistry();
    }
}
