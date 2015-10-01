package com.misys.crowdfunding.rest;

import com.misys.crowdfunding.service.api.IMetricsService;
import com.misys.crowdfunding.service.api.IProjectService;
import com.trmsys.cargo.extender.Module;
import org.javabits.yar.guice.AbstractRegistryModule;

//
// A standard Guice module loaded at startup time by cargo
// at startup time.
//
@Module
public class RegistryModule extends AbstractRegistryModule {
    @Override
    protected void configureRegistry() {
        bind(IProjectService.class).toRegistry();
        bind(IMetricsService.class).toRegistry();
    }
}
